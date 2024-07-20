import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ant from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Montly_task = () => {
  const navigation = useNavigation()
  const press_handle1 = () => {
    navigation.navigate('monthlyTask')

  }
  const press_handle2 = () => {
    navigation.navigate('bottom-tab')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: 'white', marginTop: 20 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity onPress={press_handle2}>
            <Ant name='left' color="#000" size={30} />

          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'black ' }}>Monthly Task</Text>
          <TouchableOpacity onPress={press_handle1}>
            <FontAwesome6 name='pen' color="#000" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 30, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ color: 'black' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
              September, 12  ✍
            </Text>
            <Text style={{ fontSize: 20 }}>15 task today</Text>

          </View>
          <View style={{ position: 'relative', top: 30 }}>
            <Text><Fontisto name='date' size={25} /></Text>

          </View>
        </View>
        <ScrollView horizontal>
          <View style={{ marginVertical: 20, borderWidth: 1, marginLeft: 20, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "#756EF3" }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              19
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 0, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 0, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 0, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>
          <View style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 20 }}>
              19
            </Text>
            <Text style={{ fontSize: 20 }}>
              sat
            </Text>
          </View>



        </ScrollView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Montly_task

const styles = StyleSheet.create({})