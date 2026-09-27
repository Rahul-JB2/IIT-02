import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ALL_CHAPTERS, ALL_TESTS } from '../../src/data/super50Data';

export default function HomeScreen() {
  const physics = ALL_CHAPTERS.filter(c => c.subject === 'Physics').length;
  const chemistry = ALL_CHAPTERS.filter(c => c.subject === 'Chemistry').length;
  const maths = ALL_CHAPTERS.filter(c => c.subject === 'Mathematics').length;

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>JEE 2027 • NATIVE ANDROID</Text>
      <Text style={styles.title}>IIT Super-50</Text>
      <Text style={styles.subtitle}>Your study command center</Text>

      <View style={styles.hero}>
        <View style={{flex:1}}>
          <Text style={styles.heroLabel}>CURRENT PLAN</Text>
          <Text style={styles.heroTitle}>Build consistency. Analyse every test.</Text>
          <Text style={styles.heroText}>{ALL_TESTS.length} tests • {ALL_CHAPTERS.length} chapters mapped</Text>
        </View>
        <Ionicons name="rocket-outline" size={42} color="#7DD3FC" />
      </View>

      <View style={styles.grid}>
        <Stat icon="flash-outline" label="Physics" value={physics} />
        <Stat icon="flask-outline" label="Chemistry" value={chemistry} />
        <Stat icon="calculator-outline" label="Mathematics" value={maths} />
        <Stat icon="trophy-outline" label="Tests" value={ALL_TESTS.length} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Native migration</Text>
        <Text style={styles.sectionText}>
          Firebase is intentionally disabled for now. We are first migrating the complete app experience,
          syllabus, test planner, mastery and local study tools. Cloud sync and authentication will be added later.
        </Text>
      </View>
    </ScrollView>
  );
}

function Stat({icon,label,value}:{icon:any;label:string;value:number}) {
  return (
    <View style={styles.card}>
      <Ionicons name={icon} size={23} color="#7DD3FC" />
      <Text style={styles.cardTitle}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.note}>mapped</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818'},
  content:{padding:20,paddingTop:58,paddingBottom:100},
  eyebrow:{color:'#7DD3FC',fontSize:11,fontWeight:'800',letterSpacing:1.5},
  title:{color:'#F8FAFC',fontSize:34,fontWeight:'800',marginTop:5},
  subtitle:{color:'#94A3B8',fontSize:15,marginTop:7,marginBottom:22},
  hero:{backgroundColor:'#0B1430',borderWidth:1,borderColor:'#223154',borderRadius:22,padding:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  heroLabel:{color:'#38BDF8',fontSize:11,fontWeight:'800',letterSpacing:1.5},
  heroTitle:{color:'#F8FAFC',fontSize:21,fontWeight:'800',marginTop:7},
  heroText:{color:'#94A3B8',marginTop:8,fontSize:13},
  grid:{flexDirection:'row',flexWrap:'wrap',gap:10,marginTop:14},
  card:{backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:15,width:'48%',minHeight:135},
  cardTitle:{color:'#CBD5E1',fontSize:13,fontWeight:'600',marginTop:10},
  value:{color:'#F8FAFC',fontSize:26,fontWeight:'800',marginTop:7},
  note:{color:'#64748B',fontSize:11,marginTop:2},
  section:{marginTop:18,backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:18},
  sectionTitle:{color:'#F8FAFC',fontSize:18,fontWeight:'800'},
  sectionText:{color:'#94A3B8',lineHeight:21,marginTop:8}
});