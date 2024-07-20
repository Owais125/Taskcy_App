import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Get_Started = () => {
    const navigation = useNavigation()
    const  started_Button =()=>{
        navigation.navigate('slider-one')
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <ScrollView>
                <View >
                    <Image resizeMode='cover' height={350} width={100} source={require("../assets/Image1.jpeg")} />
                    <View style={{ gap: 10, alignItems: 'center', position: 'relative', top: -20, backgroundColor: "white", borderRadius: 30 }}>
                        <View style={{ flex: 1, flexWrap: 'nowrap', paddingTop: 20, flexDirection: 'row', gap: 2 }}>
                            <Text style={{ border: 1, borderColor: "#5b48fc", width: 35, borderWidth: 2, fontSize: 40, fontWeight: 'bold', height: 1, borderRadius: 1, color: '#5b48fc' }}>

                            </Text>
                            <Text style={{ border: 1, borderColor: "#c1bdbd", width: 5, borderWidth: 2, fontSize: 40, fontWeight: 'bold', height: 1, borderRadius: 1 }}>

                            </Text>
                            <Text style={{ border: 1, borderColor: "#c1bdbd", width: 5, borderWidth: 2, fontSize: 40, fontWeight: 'bold', height: 1, borderRadius: 1 }}>

                            </Text>

                        </View>
                        <Text style={{ flex: 1, paddingTop: 20, alignItems: "center", justifyContent: 'center', textAlign: 'center', fontSize: 60, fontWeight: 'bold', color: '#5b48fc' }}>
                            Taskcy
                        </Text>
                        <Text style={{ fontSize: 40, textAlign: 'center' }}>
                            Building Better  Workplaces
                        </Text>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>
                            create a unique emotional story that describe better than words
                        </Text>
                        <TouchableOpacity onPress={started_Button}>
                            <Text style={{
                                borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                                backgroundColor: '#5b48fc', width: 300, padding: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center',color:'white',fontSize:20
                            }}>
                                Get Started
                            </Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default Get_Started

const styles = StyleSheet.create({})