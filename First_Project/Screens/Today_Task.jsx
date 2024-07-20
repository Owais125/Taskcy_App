import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

const Today_Task = () => {
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
                    <Text style={{ width: "30%", fontSize: 20, color: "#000" }}>Today Task</Text>
                    <TouchableOpacity onPress={press_handle1}>
                        <FontAwesome6 name='pen' color="#000" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 30, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ color: 'black' }}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                            October, 20 ✍
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
                <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
                    {/* 
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{gap:70}}>
              <Text>10 am</Text>
              </View>
              <View style={{backgroundColor:'#63b4ff',borderRadius:16,padding:20}}>
                <Text>Wareframe elements ☺</Text>
              <View style={{flexDirection:'row',marginTop:10}}>
              <Image  source={require("../assets/user3.png")}/>
              <Image style={{position:'relative',right:10}} source={require("../assets/user2.png")}/>

              <Text style={{marginTop:10}}>10am-11am</Text>
              </View>
              </View>
              </View>
              <Text style={{marginStart:40}}>10 am</Text>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{gap:70}}>
              </View>

              <View style={{backgroundColor:'#63b4ff',borderRadius:16,padding:20}}>
                <Text>Wareframe elements ☺</Text>  
              <View style={{flexDirection:'row',marginTop:10}}>
              <Image  source={require("../assets/user3.png")}/>
              <Image style={{position:'relative',right:10}} source={require("../assets/user2.png")}/>

              <Text style={{marginTop:10}}>10am-11am</Text>
              </View>
              </View>
              </View>
              <Text style={{marginStart:40}}>10 am</Text> */}
                    <View style={{ width: '40%', gap: 70 }}>
                        <Text>10am</Text>
                        <Text>11am</Text>
                        <Text>12pm</Text>
                        <Text>01pm</Text>
                        <Text>02pm</Text>
                    </View>
                    <View style={{ width: '60%', gap: 40 }}>

                        <View>
                            <View style={{ backgroundColor: '#63b4ff', borderRadius: 16, padding: 20 }}>
                                <Text>Wareframe elements ☺</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image source={require("../assets/user3.png")} />
                                    <Image style={{ position: 'relative', right: 10 }} source={require("../assets/user2.png")} />

                                    <Text style={{ marginTop: 10 }}>10am-11am</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{ backgroundColor: '#b1d199', borderRadius: 16, padding: 20, width: 230 }}>
                                <Text>Mobile app Design 😍</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image style={{ position: 'relative', right: 10 }} source={require("../assets/user3.png")} />
                                    <Image style={{ position: 'relative', right: 20 }} source={require("../assets/user1.png")} />
                                    <Image style={{ position: 'relative', right: 30 }} source={require("../assets/user2.png")} />

                                    <Text style={{ marginTop: 10, position: 'relative', right: 20 }}>11:40am - 12:40pm</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{ backgroundColor: '#63b4ff', borderRadius: 16, padding: 20, width: 240 }}>
                                <Text>Design Team call 🤗</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image style={{ position: 'relative', right: 10 }} source={require("../assets/user3.png")} />
                                    <Image style={{ position: 'relative', right: 20 }} source={require("../assets/user1.png")} />
                                    <Image style={{ position: 'relative', right: 30 }} source={require("../assets/user2.png")} />

                                    <Text style={{ marginTop: 10, position: 'relative', right: 20 }}>01:20pm - 02:20pm</Text>
                                </View>
                            </View>
                        </View>



                    </View>



                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default Today_Task

const styles = StyleSheet.create({})