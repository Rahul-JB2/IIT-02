import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Native profile, Firebase authentication and progress settings will be connected during the next migration phase.</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:'#050818',padding:24,paddingTop:70},
  title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},
  text:{color:'#94A3B8',fontSize:15,lineHeight:23,marginTop:12}
});