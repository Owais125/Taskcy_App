import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { message_service, post_service, project_service } from '../services/post_services'

const Create_chats = () => {
  const navigation = useNavigation()

  const [data, setdata] = useState({})
  
  const on_Change_Handle = async(name, value) => {
      const user_id = await AsyncStorage.getItem('UserId')
      console.log(user_id)
    setdata((pre) => ({ ...pre, [name]: value,user_id:user_id }))
  }
  console.log(data)
  const submit = async()=>{
    try {
        const res = await message_service(data)
        if (res) {
            await console.log(res)
          await navigation.navigate('Chat')
  
        }
      } catch (error) {
        console.log(error)
      }

  }
    return (
        <View style={{ gap: 20, justifyContent: 'center', alignItems: 'center', paddingTop: 230 }}>

            <Text style={{ fontSize: 50, color: 'black',fontWeight:'bold' }}>Add Chat </Text>
            <View style={{ gap: 20, }}>

                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <TextInput onChangeText={(e) => on_Change_Handle('sender', e)} style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Title' />
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <TextInput onChangeText={(e) => on_Change_Handle('content', e)} keyboardType='email-address' style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Description' />
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={submit}
                    >
                        <Text style={{ textAlign: "center", backgroundColor: "#756EF3", color: "#FFFFFF", fontSize: 20, fontWeight: "bold", borderRadius: 15, borderColor: "#756EF3", borderWidth: 2, padding: 10, width: 350 }}>
                            Send Chat 
                        </Text>
                    </TouchableOpacity>


                </View>

            </View>
        </View>
    )
}

export default Create_chats

const styles = StyleSheet.create({})
