import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Ant from 'react-native-vector-icons/AntDesign'
import { login_service } from '../services/auth_services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  // Set an initializing state whilst Firebase connects
  const [data, setdata] = useState({})





  const on_Change_Handle = (name, value) => {
    setdata((pre) => ({ ...pre, [name]: value }))
  }

  const submit = async () => {
    try {
      const res = await login_service(data)
      if (res) {
        const access_token = res.data.access_token

        await AsyncStorage.setItem('UserId', res.data.userId)
        await AsyncStorage.setItem('@token', access_token)
        await dispatch(authAction({ auth: true, profile: null }))
        await navigation.navigate('bottom-tab')

      }
    } catch (error) {
      console.log(error)
    }

    // if (!user) {
    //   return (
    //     Alert('User Not Found First SignUp')
    //   );
    // }
    // else {
    //   navigation.navigate('home')

    // }
  }
  const signup = () => {
    navigation.navigate('signup')
  }
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: 'white' }}>
      <ScrollView >
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ width: "40%" }}><Ant name='left' color="#000" size={20} /></Text>
            <Text style={{ width: "44%", fontSize: 20, color: "#000" }}>Sign In</Text>
          </View>

        </View>
        <View style={{ paddingHorizontal: 25, paddingVertical: 40, gap: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text style={{ fontSize: 20 }}>
            Please Inter your email address

          </Text>
          <Text style={{ fontSize: 20 }}>
            and password for login
          </Text>
        </View>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={{ gap: 20 }}>

            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput onChangeText={(e) => on_Change_Handle('email', e)} keyboardType='email-address' style={{ borderColor: "black", borderWidth: 2, width: 350, borderRadius: 10, padding: 10 }} placeholder='Enter The Email' />
            </View>

            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput secureTextEntry={true} onChangeText={(e) => on_Change_Handle('password', e)} style={{ borderColor: "black", borderWidth: 2, width: 350, borderRadius: 10, padding: 10 }} placeholder='Enter The Confirm Password' />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
              <TouchableOpacity
                onPress={submit}
              >
                <Text style={{ textAlign: "center", backgroundColor: "#756EF3", color: "#FFFFFF", fontSize: 20, fontWeight: "bold", borderColor: "#756EF3", borderWidth: 2, padding: 10, width: 350, borderRadius: 15 }}>
                  Login
                </Text>
              </TouchableOpacity>


            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ fontSize: 15, textAlign: 'center' }}>
                Not Register yet?
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                  onPress={signup}
                >
                  <Text style={{ color: "#756EF3", fontSize: 15, textAlign: 'center' }} >
                    signup
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Login