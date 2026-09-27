import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_CHAPTERS } from '../../src/data/super50Data';

const subjects = ['Physics','Chemistry','Mathematics'];

export default function PlannerScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Chapter Planner</Text>
      <Text style={styles.sub}>Syllabus is now available natively and works without Firebase.</Text>
      {subjects.map(subject => {
        const chapters = ALL_CHAPTERS.filter(c => c.subject === subject);
        return (
          <View key={subject} style={styles.section}>
            <Text style={styles.subject}>{subject}</Text>
            {chapters.map((chapter, i) => (
              <View key={chapter.id} style={styles.row}>
                <View style={styles.num}><Text style={styles.numText}>{i+1}</Text></View>
                <View style={{flex:1}}>
                  <Text style={styles.name}>{chapter.name}</Text>
                  <Text style={styles.meta}>Starts in Part Test {chapter.introducedInTest} • {chapter.keyTopics.slice(0,2).join(' • ')}</Text>
                </View>
              </View>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818'},
  content:{padding:20,paddingTop:58,paddingBottom:100},
  title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},
  sub:{color:'#94A3B8',fontSize:14,lineHeight:21,marginTop:8,marginBottom:18},
  section:{backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:18,padding:15,marginBottom:14},
  subject:{color:'#7DD3FC',fontSize:18,fontWeight:'800',marginBottom:8},
  row:{flexDirection:'row',paddingVertical:11,borderBottomWidth:1,borderBottomColor:'#141D35'},
  num:{width:30,height:30,borderRadius:15,backgroundColor:'#111C37',alignItems:'center',justifyContent:'center',marginRight:10},
  numText:{color:'#7DD3FC',fontWeight:'800',fontSize:12},
  name:{color:'#F8FAFC',fontWeight:'700',fontSize:14},
  meta:{color:'#64748B',fontSize:11,marginTop:3,lineHeight:16}
});