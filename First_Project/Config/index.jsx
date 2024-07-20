import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../Screens/SignUp";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Get_Started from "../Screens/Get_Started";
import Slider_one from "../Screens/Slider_one";
import Slider_Tow from "../Screens/Slider_Tow";
import Slider_three from "../Screens/Slider_three";
import Bottom_Tab from "./Bottom_Tab";
import Today_Task from "../Screens/Today_Task";
import Montly_task from "../Screens/Montly_task";
import Create_Task from "../Screens/Create_Task";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  { authAction } from "../store/slices/authSlice";
import Create_Project from "../Screens/Create_Project";
import Create_Team from "../Screens/Create_Team";
import Create_chats from "../Screens/Create_chats";
import Setting from "../Screens/Setting";


const Stack = createNativeStackNavigator()
function App_Navigation() {
  const authSlice = useSelector((state)=>state.auth)

  const dispatch= useDispatch()
  useEffect(() => {
    //  iife ----->
    ;( async () => {

      const auth_token = await AsyncStorage.getItem('@token')  || ''

     if(auth_token){
      try {
        const res = await check_auth_service()

        if(res.data){
          console.log('res',res.data)
          dispatch(authAction({auth:true, profile: res.data.data}))
        }
      } catch (error) {
        dispatch(authAction({auth:false, profile:null}))
      }
     }
     else{
      dispatch(authAction({auth:false, profile:null}))
     }
  
    })();},[])
  return (
     <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="bottom-tab"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="getStarted" component={Get_Started} />
        <Stack.Screen name="slider-one" component={Slider_one} />
        <Stack.Screen name="slider-two" component={Slider_Tow} />
        <Stack.Screen name="slider-three" component={Slider_three} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="bottom-tab" component={Bottom_Tab} />
        <Stack.Screen name="todayTask" component={Today_Task} />
        <Stack.Screen name="monthlyTask" component={Montly_task} />
        <Stack.Screen name="createtask" component={Create_Task} />
        <Stack.Screen name="createproject" component={Create_Project} />
        <Stack.Screen name="create-team" component={Create_Team} />
        <Stack.Screen name="create-chat" component={Create_chats} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App_Navigation