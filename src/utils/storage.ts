import { UserStudyState } from '../types/jee';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALL_CHAPTERS } from '../data/super50Data';

const STORAGE_KEY = 'bseb_super50_jee_tracker_v1';

export function getDefaultInitialState(): UserStudyState {
  // Initial chapters progress map
  const chapterProgress: Record<string, ChapterProgress> = {};

  ALL_CHAPTERS.forEach((ch) => {
    // Sensible initial seed for Part Test 1 chapters (giving a fresh yet active feel)
    const isPT1 = ch.introducedInTest === 1;
    chapterProgress[ch.id] = {
      theory: isPT1 && (ch.id === 'phy-1' || ch.id === 'phy-2' || ch.id === 'chm-p1' || ch.id === 'mat-1'),
      conclusion1Page: isPT1 && (ch.id === 'phy-1' || ch.id === 'chm-p1'),
      mathongo: isPT1 && (ch.id === 'phy-1'),
      moduleEx2: false,
      eklavya: false,
      prevPartTest: false,
      mathongoSolved: isPT1 && ch.id === 'phy-1' ? 42 : 0,
      moduleEx2Solved: 0,
      eklavyaSolved: 0,
      confidenceRating: isPT1 ? 3 : 1,
    };
  });

  return {
    currentSimulatedDate: '2026-09-27',
    chapterProgress,
    dailyPlans: {},
    mockResults: [],
    dailyStreak: 3,
    lastActiveDate: '2026-09-27',
    studyHoursLoggedTotal: 18.5,
    dailyStudyHours: {
      '2026-09-27': 6.5,
      '2026-09-26': 7.0,
      '2026-09-25': 5.0,
    },
    dailyQuestionsSolved: {
      '2026-09-27': { total: 72, physics: 28, chemistry: 24, math: 20 },
      '2026-09-26': { total: 85, physics: 30, chemistry: 30, math: 25 },
      '2026-09-25': { total: 60, physics: 20, chemistry: 20, math: 20 },
    },
    unlockedBadgeIds: ['triad-start', 'summary-starter'],
    targetDailyStudyHours: 8.0,
    energyProfile: {
      peakAlertSlot: 'morning',
      prioritizeHardestInPeakHours: true,
      subjectEnergy: {
        Physics: 'High',
        Chemistry: 'Medium',
        Math: 'High',
      },
    },
    quizHistory: [],
  };
}

export async function loadUserStudyState(): Promise<UserStudyState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getDefaultInitialState();
      await saveUserStudyState(initial);
      return initial;
    }
    const parsed = JSON.parse(raw) as UserStudyState;
    // ensure any newly added chapters are present in chapterProgress
    ALL_CHAPTERS.forEach((ch) => {
      if (!parsed.chapterProgress[ch.id]) {
        parsed.chapterProgress[ch.id] = {
          theory: false,
          conclusion1Page: false,
          mathongo: false,
          moduleEx2: false,
          eklavya: false,
          prevPartTest: false,
        };
      }
    });
    if (!parsed.energyProfile) {
      parsed.energyProfile = {
        peakAlertSlot: 'morning',
        prioritizeHardestInPeakHours: true,
        subjectEnergy: {
          Physics: 'High',
          Chemistry: 'Medium',
          Math: 'High',
        },
      };
    }
    if (!parsed.targetDailyStudyHours) {
      parsed.targetDailyStudyHours = 8.0;
    }
    return parsed;
  } catch (err) {
    console.error('Failed to load study state:', err);
    return getDefaultInitialState();
  }
}

export async function saveUserStudyState(state: UserStudyState): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to persist study state:', err);
  }
}
