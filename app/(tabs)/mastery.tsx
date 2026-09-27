import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useMemo, useState } from 'react';
import { ALL_CHAPTERS } from '../../src/data/super50Data';

type Subject = 'Physics' | 'Chemistry' | 'Mathematics';
const milestones = ['Theory', '1-Page Summary', 'MathonGo PYQ', 'Module Ex-2', 'Eklavya', 'Previous Test'];

export default function MasteryScreen() {
  const [subject, setSubject] = useState<Subject>('Physics');
  const [done, setDone] = useState<Record<string, boolean>>({});
  const chapters = useMemo(() => ALL_CHAPTERS.filter(c => c.subject === subject), [subject]);

  const toggle = (id:string, milestone:number) => {
    const key = id + '-' + milestone;
    setDone(p => ({...p,[key]:!p[key]}));
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Chapter Mastery</Text>
      <Text style={styles.sub}>6-step mastery matrix • stored locally on this device</Text>
      <View style={styles.tabs}>
        {(['Physics','Chemistry','Mathematics'] as Subject[]).map(s =>
          <Pressable key={s} onPress={()=>setSubject(s)} style={[styles.tab,subject===s&&styles.active]}>
            <Text style={[styles.tabText,subject===s&&styles.activeText]}>{s}</Text>
          </Pressable>
        )}
      </View>
      {chapters.map(ch => {
        const count = milestones.filter((_,i)=>done[ch.id+'-'+i]).length;
        return <View key={ch.id} style={styles.card}>
          <View style={styles.head}>
            <View style={{flex:1}}>
              <Text style={styles.name}>{ch.name}</Text>
              <Text style={styles.topic}>{ch.keyTopics.join(' • ')}</Text>
            </View>
            <Text style={styles.percent}>{Math.round(count/6*100)}%</Text>
          </View>
          <View style={styles.progress}><View style={[styles.fill,{width:`${count/6*100}%`}]} /></View>
          <View style={styles.milestones}>
            {milestones.map((m,i)=><Pressable key={m} onPress={()=>toggle(ch.id,i)} style={[styles.pill,done[ch.id+'-'+i]&&styles.done]}>
              <Text style={[styles.pillText,done[ch.id+'-'+i]&&styles.doneText]}>{done[ch.id+'-'+i]?'✓ ':'○ '}{m}</Text>
            </Pressable>)}
          </View>
        </View>
      })}
    </ScrollView>
  );
}
const styles=StyleSheet.create({
 page:{flex:1,backgroundColor:'#050818'},content:{padding:20,paddingTop:58,paddingBottom:100},
 title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},sub:{color:'#94A3B8',marginTop:7,marginBottom:16},
 tabs:{flexDirection:'row',gap:7,marginBottom:14},tab:{flex:1,paddingVertical:10,borderRadius:12,backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',alignItems:'center'},active:{backgroundColor:'#102440',borderColor:'#2D6688'},tabText:{color:'#64748B',fontSize:11,fontWeight:'700'},activeText:{color:'#7DD3FC'},
 card:{backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:15,marginBottom:12},head:{flexDirection:'row'},name:{color:'#F8FAFC',fontWeight:'800',fontSize:15},topic:{color:'#64748B',fontSize:10,lineHeight:15,marginTop:4},percent:{color:'#7DD3FC',fontWeight:'800'},progress:{height:5,backgroundColor:'#141D35',borderRadius:5,overflow:'hidden',marginTop:12},fill:{height:'100%',backgroundColor:'#38BDF8'},milestones:{flexDirection:'row',flexWrap:'wrap',gap:6,marginTop:11},pill:{borderWidth:1,borderColor:'#24304A',borderRadius:9,paddingHorizontal:8,paddingVertical:6},done:{backgroundColor:'#0D2A27',borderColor:'#1D6B5C'},pillText:{color:'#94A3B8',fontSize:9},doneText:{color:'#6EE7B7'}
});