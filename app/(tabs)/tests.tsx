import { StyleSheet, Text, View } from 'react-native';

export default function TestsScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Tests</Text>
      <Text style={styles.text}>Native test tracker — your existing score tracker and test-planning logic will be migrated here.</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818',padding:24,paddingTop:70},
  title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},
  text:{color:'#94A3B8',fontSize:15,lineHeight:23,marginTop:12}
});