import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ant from "react-native-vector-icons/AntDesign"
// import { Team_Members_Data } from '../utils/Team_Members_Utils'

export default function Create_Team() {
  const Team_Members_Data = [
    {
      image_url: require('../assets/user1.png'),
      text: 'Jeny',
    },
    {
      image_url: require('../assets/user2.png'),
      text: 'Mehrin',
    },
    {
      image_url: require('../assets/user3.png'),
      text: 'Avishek',
    },
    {
      image_url: require('../assets/user3.png'),
      text: 'Jafar',
    },
  ];
  const navigation = useNavigation()
  const [urgent, setUrgent] = useState(false)
  const [running, setRunning] = useState(false)
  const [ongoing, setOngoing] = useState(false)


  const custom_Styling = urgent == false ? styles.main_5_main_texts : styles.main_5_main_texts_onPress
  const custom_Styling1 = running == false ? styles.main_5_main_texts : styles.main_5_main_texts_onPress
  const custom_Styling2 = ongoing == false ? styles.main_5_main_texts : styles.main_5_main_texts_onPress


  const urgent_Handle = () => {
    setUrgent(true)
    setRunning(false)
    setOngoing(false)
  }

  const running_Handle = () => {
    setUrgent(false)
    setRunning(true)
    setOngoing(false)

  }
  const ongoing_Handle = () => {
    setUrgent(false)
    setRunning(false)
    setOngoing(true)
  }
  const onPress_Handle = () => {
    navigation.goBack()
  }
  const pressHandle = () => {
    navigation.navigate('Add')
  }
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
        <TouchableOpacity onPress={onPress_Handle}>
          <Ant name='left' size={20} color='black' />
        </TouchableOpacity>
        <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
          Create Team
        </Text>
        <View></View>
      </View>
      <View style={styles.main}>
        <Image style={styles.image} source={require("../assets/Image5.png")} />
        <Text style={styles.main_Text}>
          Upload Logo File
        </Text>
        <Text style={{ marginVertical: 10, fontSize: 15, color: "black" }}>
          Your is publish always
        </Text>
      </View>
      <View>
        <Text style={{ marginHorizontal: 20, fontSize: 20 }}>
          Team name
        </Text>
        <TextInput style={{ borderWidth: 1, marginHorizontal: 20, marginVertical: 10, height: 50, fontSize: 20, paddingLeft: 20, borderRadius: 10 }} placeholder='Enter a team Name' />
      </View>
      <View style={styles.main_2}>
        <Text style={styles.main_2_Text}>Team Member</Text>
        <View style={styles.main_2_main}>
          {Team_Members_Data.map((elem, i) => {
            return (
              <TouchableOpacity key={i} style={styles.main_2_main_1}>
                <Image resizeMode='cover' style={{ width: 50, height: 50 }} source={elem.image_url} />
                <Text>
                  {elem.text}
                </Text>
              </TouchableOpacity>
            )
          })}

          <TouchableOpacity style={styles.main_2_main_1}>
            <Ant name='pluscircleo' size={45} />
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderWidth: 1, marginVertical: 25, marginHorizontal: 20, borderStartWidth: 0, borderEndWidth: 0, borderBottomWidth: 0 }}>

      </View>
      <View style={styles.main_5}>
        <Text style={styles.main_5_text}>
          Board
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={urgent_Handle}>
            <Text style={custom_Styling}>Private</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={running_Handle}>
            <Text style={custom_Styling1}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ongoing_Handle}>
            <Text style={custom_Styling2}>Secret</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 50, borderRadius: 20, backgroundColor: "#756EF3", marginTop: 12 }}>
        <TouchableOpacity onPress={pressHandle}>
          <Text style={{ fontSize: 30, paddingVertical: 8, textAlign: "center", color: "white" }}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 250,
    justifyContent: "flex-end",
    alignItems: "center",

  },
  main_Text: {
    fontSize: 30,
    marginTop: 10,
    color: "black"
  },
  image: {
    height: 120,
    width: 120,
  },

  main_2: {
    marginHorizontal: 20
  },
  main_2_Text: {
    fontSize: 20,
    marginVertical: 15,
  },
  main_2_main: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },

  main_2_main_1: {
    justifyContent: "center",
    alignItems: "center"
  },

  main_5: {
    marginHorizontal: 20,

  },
  main_5_text: {
    fontSize: 20,
  },
  main_5_main_texts: {
    borderWidth: 1, fontSize: 25, paddingVertical: 8, paddingHorizontal: 8, borderRadius: 10, color: "black", marginVertical: 15
  },
  main_5_main_texts_onPress: {
    borderWidth: 1, fontSize: 25, paddingVertical: 8, paddingHorizontal: 8, borderRadius: 10, color: "black", marginVertical: 15, borderColor: "#756EF3"
  }
})