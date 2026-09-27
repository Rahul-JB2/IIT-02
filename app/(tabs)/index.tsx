import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const cards = [
  { icon:'flame-outline' as const, title:'Study Streak', value:'0 days', note:'Start today' },
  { icon:'target-outline' as const, title:"Today's Goal", value:'0%', note:'No study logged' },
  { icon:'trophy-outline' as const, title:'Test Score', value:'—', note:'Take a test' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>JEE 2027</Text>
      <Text style={styles.title}>IIT Super-50</Text>
      <Text style={styles.subtitle}>Your native Android study command center</Text>

      <View style={styles.hero}>
        <View>
          <Text style={styles.heroLabel}>FOCUS MODE</Text>
          <Text style={styles.heroTitle}>Build your AIR-1 routine.</Text>
          <Text style={styles.heroText}>Plan • Practice • Analyse • Improve</Text>
        </View>
        <Ionicons name="rocket-outline" size={42} color="#7DD3FC" />
      </View>

      <View style={styles.grid}>
        {cards.map(card => (
          <View key={card.title} style={styles.card}>
            <Ionicons name={card.icon} size={24} color="#7DD3FC" />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.value}>{card.value}</Text>
            <Text style={styles.note}>{card.note}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Native App Migration</Text>
        <Text style={styles.sectionText}>
          This project is React Native + Expo. The next migration layers will bring your existing
          planner, chapter mastery, tests, rewards and Gemini/Firebase features into native screens.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818'},
  content:{padding:20,paddingTop:58,paddingBottom:100},
  eyebrow:{color:'#7DD3FC',fontSize:13,fontWeight:'700',letterSpacing:2},
  title:{color:'#F8FAFC',fontSize:34,fontWeight:'800',marginTop:5},
  subtitle:{color:'#94A3B8',fontSize:15,marginTop:7,marginBottom:22},
  hero:{backgroundColor:'#0B1430',borderWidth:1,borderColor:'#223154',borderRadius:22,padding:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  heroLabel:{color:'#38BDF8',fontSize:11,fontWeight:'800',letterSpacing:1.5},
  heroTitle:{color:'#F8FAFC',fontSize:21,fontWeight:'800',marginTop:7,maxWidth:250},
  heroText:{color:'#94A3B8',marginTop:8,fontSize:13},
  grid:{flexDirection:'row',flexWrap:'wrap',gap:10,marginTop:14},
  card:{backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:15,width:'48%',minHeight:142},
  cardTitle:{color:'#CBD5E1',fontSize:13,fontWeight:'600',marginTop:10},
  value:{color:'#F8FAFC',fontSize:22,fontWeight:'800',marginTop:7},
  note:{color:'#64748B',fontSize:11,marginTop:4},
  section:{marginTop:18,backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:18},
  sectionTitle:{color:'#F8FAFC',fontSize:18,fontWeight:'800'},
  sectionText:{color:'#94A3B8',lineHeight:21,marginTop:8}
});