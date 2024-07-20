import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Add = () => {
  const navigation = useNavigation()
  const press_handle1 = ()=>{
    navigation.navigate('createtask')
  }
  const press_handle2 = ()=>{
    navigation.navigate('createproject')
  }
  const press_handle3 = ()=>{
    navigation.navigate('create-team')
  }
  return (
    <View style={{justifyContent:'center',alignItems:'center',paddingTop:150}}>
    <View style={{width:"100%",height:500,paddingVertical:30,alignItems:'center',gap:30}}>
      <View style={{alignItems:'center',border:1,borderWidth:1,width:250,borderRadius:10}}>
      <TouchableOpacity onPress={press_handle1}>
        <Text style={{padding:20,fontSize:30}}>
          Create Task
        </Text>
      </TouchableOpacity >
      </View>
      <View style={{alignItems:'center',border:1,borderWidth:1,width:250,borderRadius:10}}>
      <TouchableOpacity onPress={press_handle2}>
        <Text style={{padding:20,fontSize:30}}>
        Create Project
        </Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems:'center',border:1,borderWidth:1,width:250,borderRadius:10}}>
      <TouchableOpacity onPress={press_handle3}>
        <Text style={{padding:20,fontSize:30}}>
        Create Team
        </Text>
      </TouchableOpacity>
      </View>
      
    </View>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})