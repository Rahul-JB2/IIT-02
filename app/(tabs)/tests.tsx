import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_TESTS } from '../../src/data/super50Data';

export default function TestsScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Test Planner</Text>
      <Text style={styles.sub}>All scheduled JEE tests from the original planner, now available in the native app.</Text>
      {ALL_TESTS.map(test => (
        <View key={test.id} style={styles.card}>
          <View style={styles.top}>
            <View style={{flex:1}}>
              <Text style={styles.type}>{test.type === 'part' ? 'PART TEST' : 'FULL TEST'}</Text>
              <Text style={styles.name}>{test.name}</Text>
            </View>
            <Text style={styles.date}>{test.date}</Text>
          </View>
          <Text style={styles.pattern}>{test.pattern} • {test.mode}</Text>
          <Text style={styles.syllabus}>{test.physicsSyllabus}</Text>
          <Text style={styles.syllabus}>{test.mathSyllabus}</Text>
          <Text style={styles.note}>{test.cumulativeNotes}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818'},
  content:{padding:20,paddingTop:58,paddingBottom:100},
  title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},
  sub:{color:'#94A3B8',fontSize:14,lineHeight:21,marginTop:8,marginBottom:18},
  card:{backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:16,marginBottom:12},
  top:{flexDirection:'row',alignItems:'flex-start'},
  type:{color:'#38BDF8',fontSize:10,fontWeight:'800',letterSpacing:1.2},
  name:{color:'#F8FAFC',fontSize:18,fontWeight:'800',marginTop:3},
  date:{color:'#CBD5E1',fontSize:12,fontWeight:'700',marginLeft:8},
  pattern:{color:'#64748B',fontSize:11,marginTop:8},
  syllabus:{color:'#CBD5E1',fontSize:12,lineHeight:18,marginTop:8},
  note:{color:'#475569',fontSize:11,lineHeight:16,marginTop:8}
});