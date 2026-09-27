import { StyleSheet, Text, View } from 'react-native';

export default function PlannerScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Study Planner</Text>
      <Text style={styles.text}>Native planner module — ready for migration of your existing Daily PCM Goals and Test Planner.</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818',padding:24,paddingTop:70},
  title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},
  text:{color:'#94A3B8',fontSize:15,lineHeight:23,marginTop:12}
});