import { ScrollView,StyleSheet,Text,View,Pressable } from 'react-native';
import { useState } from 'react';

const badges=[
 {id:'triad',name:'PCM Triad',desc:'Complete all 3 daily PCM goals',pts:20,icon:'🎯'},
 {id:'target',name:'Target Crusher',desc:'Complete your daily study target',pts:50,icon:'⏱️'},
 {id:'streak7',name:'7-Day Streak',desc:'Study consistently for 7 days',pts:100,icon:'🔥'},
 {id:'test',name:'Test Analyst',desc:'Log a mock test with error analysis',pts:40,icon:'🏆'},
 {id:'mastery',name:'Chapter Master',desc:'Finish all 6 chapter milestones',pts:60,icon:'📚'}
];
export default function RewardsScreen(){
 const [points,setPoints]=useState(0),[earned,setEarned]=useState<string[]>([]),[streak,setStreak]=useState(0);
 const claim=(b:any)=>{if(!earned.includes(b.id)){setEarned(e=>[...e,b.id]);setPoints(p=>p+b.pts)}};
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
  <Text style={s.title}>Rewards</Text><Text style={s.sub}>Study consistency → points → achievements</Text>
  <View style={s.balance}><View><Text style={s.small}>MASTERY POINTS</Text><Text style={s.points}>✨ {points}</Text></View><View><Text style={s.small}>STREAK</Text><Text style={s.streak}>🔥 {streak} days</Text></View></View>
  <View style={s.card}><Text style={s.section}>Daily Streak</Text><Text style={s.muted}>Keep studying every day to build your streak.</Text><Pressable style={s.streakBtn} onPress={()=>setStreak(x=>x+1)}><Text style={s.btnText}>Mark Study Day +1</Text></Pressable></View>
  {badges.map(b=><View key={b.id} style={[s.badge,earned.includes(b.id)&&s.earned]}><Text style={s.icon}>{b.icon}</Text><View style={s.info}><Text style={s.name}>{b.name}</Text><Text style={s.desc}>{b.desc}</Text><Text style={s.cost}>+{b.pts} pts</Text></View><Pressable disabled={earned.includes(b.id)} onPress={()=>claim(b)} style={[s.claim,earned.includes(b.id)&&s.claimed]}><Text style={s.claimText}>{earned.includes(b.id)?'✓ Earned':'Claim'}</Text></Pressable></View>)}
 </ScrollView>
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#050818'},content:{padding:20,paddingTop:58,paddingBottom:100},title:{color:'#F8FAFC',fontSize:30,fontWeight:'800'},sub:{color:'#94A3B8',marginTop:6,marginBottom:16},balance:{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#0A1024',borderWidth:1,borderColor:'#7C5A18',borderRadius:18,padding:18,marginBottom:12},small:{color:'#64748B',fontSize:9,fontWeight:'800'},points:{color:'#FBBF24',fontSize:25,fontWeight:'900',marginTop:4},streak:{color:'#FB923C',fontSize:18,fontWeight:'900',marginTop:7},card:{backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:17,padding:15,marginBottom:12},section:{color:'#fff',fontSize:15,fontWeight:'800'},muted:{color:'#94A3B8',fontSize:11,marginTop:5},streakBtn:{backgroundColor:'#FBBF24',padding:12,borderRadius:10,alignItems:'center',marginTop:12},btnText:{color:'#080D20',fontWeight:'900'},badge:{flexDirection:'row',alignItems:'center',backgroundColor:'#0A1024',borderWidth:1,borderColor:'#182442',borderRadius:16,padding:13,marginBottom:9},earned:{borderColor:'#1D6B5C',backgroundColor:'#0B211E'},icon:{fontSize:26,width:40},info:{flex:1},name:{color:'#F8FAFC',fontWeight:'800',fontSize:14},desc:{color:'#94A3B8',fontSize:10,marginTop:3},cost:{color:'#FBBF24',fontSize:10,fontWeight:'800',marginTop:4},claim:{backgroundColor:'#38BDF8',paddingHorizontal:11,paddingVertical:8,borderRadius:9},claimed:{backgroundColor:'#12352F'},claimText:{color:'#06101D',fontSize:10,fontWeight:'900'}});
