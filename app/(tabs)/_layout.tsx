import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout(){
 return <Tabs screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:'#080D20',borderTopColor:'#18203A',height:62,paddingBottom:7,paddingTop:5},tabBarActiveTintColor:'#7DD3FC',tabBarInactiveTintColor:'#64748B',tabBarLabelStyle:{fontSize:10,fontWeight:'700'}}}>
  <Tabs.Screen name="index" options={{title:'Home',tabBarIcon:({color,size})=><Ionicons name="home-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="tests" options={{title:'Tests',tabBarIcon:({color,size})=><Ionicons name="trophy-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="gemini" options={{title:'Gemini',tabBarIcon:({color,size})=><Ionicons name="sparkles-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="scores" options={{title:'Score',tabBarIcon:({color,size})=><Ionicons name="stats-chart-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="profile" options={{title:'Profile',tabBarIcon:({color,size})=><Ionicons name="person-outline" color={color} size={size}/>}}/>
  <Tabs.Screen name="planner" options={{href:null}}/><Tabs.Screen name="mastery" options={{href:null}}/><Tabs.Screen name="daily" options={{href:null}}/><Tabs.Screen name="rewards" options={{href:null}}/><Tabs.Screen name="strategy" options={{href:null}}/><Tabs.Screen name="quiz" options={{href:null}}/>
 </Tabs>
}