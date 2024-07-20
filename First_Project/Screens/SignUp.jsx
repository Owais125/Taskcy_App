import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ant from 'react-native-vector-icons/AntDesign'
import { signup_service } from '../services/auth_services';

const Singup = () => {
  const [data, setdata] = useState({})
  const navigation = useNavigation()

  const on_Change_Handle = (name, value) => {
    setdata((pre) => ({ ...pre, [name]: value }))
  }
  console.log(data)
  // const signip = () => {
  //   //navigation.navigate('Login')

  // }
  const home = async () => {
    try {
      const res = await signup_service(data)
      if (res) {
      //  await console.log(res.data._id)
        // await AsyncStorage.setItem("user_Id", res.data._id)
        navigation.navigate('Login')

      }

    } catch (error) {
      console.log(error)

    }

    //   auth().createUserWithEmailAndPassword(data.email,data.password).then(()=>console.log("Okay"))
    // await  AsyncStorage.setItem('Data','login')
    // navigation.navigate('bottom-tab')

  }
  const signin = () => {
    navigation.navigate('Login')
  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={{ alignItems: "center", paddingTop: 30 }}>
            <View style={{ flexDirection: "row", }}>
              <Text style={{ width: "40%" }}><Ant name='left' color="#000" size={20} /></Text>
              <Text style={{ width: "44%", fontSize: 20, color: "#000" }}>Sign Up</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 25, paddingVertical: 40, gap: 10 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Create Account
            </Text>
            <Text style={{ fontSize: 20 }}>
              Please Inter your information and

            </Text>
            <Text style={{ fontSize: 20 }}>
              create  your account
            </Text>
          </View>

          <View style={{ gap: 20 }}>


            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput onChangeText={(e) => on_Change_Handle('username', e)} style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Name' />
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput onChangeText={(e) => on_Change_Handle('email', e)} keyboardType='email-address' style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Email' />
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput secureTextEntry={true} onChangeText={(e) => on_Change_Handle('password', e)} style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The  Password' />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
              <TouchableOpacity onPress={home}>
                <Text style={{ textAlign: "center", backgroundColor: "#756EF3", color: "#FFFFFF", fontSize: 20, fontWeight: "bold", borderRadius: 15, borderColor: "#756EF3", borderWidth: 2, padding: 10, width: 350 }}>
                  Sign Up
                </Text>
              </TouchableOpacity>


            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ fontSize: 15 }}>
                Have An Account?
                <TouchableOpacity
                  onPress={signin}
                >
                  <Text style={{ color: "#756EF3", fontSize: 15 }} >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Singup

const styles = StyleSheet.create({})