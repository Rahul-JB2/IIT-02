import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarStyle:{
          backgroundColor:'#080D20',
          borderTopColor:'#18203A',
          height:64,
          paddingBottom:8,
          paddingTop:6
        },
        tabBarActiveTintColor:'#7DD3FC',
        tabBarInactiveTintColor:'#64748B'
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:'Home',
          tabBarIcon:({color,size})=><Ionicons name="home-outline" color={color} size={size}/>
        }}
      />
      <Tabs.Screen
        name="planner"
        options={{
          title:'Planner',
          tabBarIcon:({color,size})=><Ionicons name="calendar-outline" color={color} size={size}/>
        }}
      />
      <Tabs.Screen
        name="tests"
        options={{
          title:'Tests',
          tabBarIcon:({color,size})=><Ionicons name="trophy-outline" color={color} size={size}/>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          tabBarIcon:({color,size})=><Ionicons name="person-outline" color={color} size={size}/>
        }}
      />
    </Tabs>
  );
}