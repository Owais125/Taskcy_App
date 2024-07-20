import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Slider_one = () => {
    const navigation = useNavigation()
    const next = () => {
        navigation.navigate('slider-two')
    }
    const login = () => {
        navigation.navigate('Login')
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, alignItems: 'center', backgroundColor: '#f7f7f7' }}>
            <ScrollView>
                <View>
                    <Image resizeMode='cover' source={require("../assets/Image2.jpeg")} />
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#756ef3' }}>
                            Task Management
                        </Text>
                        <Text style={{ fontSize: 40 }}>
                            Let's create a <Text style={{ color: '#756ef3' }}>space</Text> for your workflows
                        </Text>
                        <View style={{ flex: 1, flexWrap: 'nowrap', paddingTop: 20, flexDirection: 'row', gap: 2 }}>
                            <Text style={{ border: 1, borderColor: "#5b48fc", width: 25, borderWidth: 2, fontSize: 40, fontWeight: 'bold', height: 1, borderRadius: 1, color: '#5b48fc' }}>

                            </Text>
                            <Text style={{ border: 1, borderColor: "#c1bdbd", width: 5, borderWidth: 2, fontSize: 40, fontWeight: 'bold', height: 1, borderRadius: 1 }}>

                            </Text>
                            <Text style={{ border: 1, borderColor: "#c1bdbd", width: 5, borderWidth: 2, fontSize: 40, fontWeight: 'bold', height: 1, borderRadius: 1 }}>

                            </Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={login} >
                            <Text style={{ fontSize: 20, marginVertical: 47, marginLeft: 40, color: '#002055' }}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={next} >
                            <View style={{
                                width: 120,
                                height: 140,
                                backgroundColor: '#7c6ff2',
                                borderTopLeftRadius: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    color: '#ffffff',
                                    fontSize: 40,
                                    position: 'absolute',
                                }}>→</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Slider_one

const styles = StyleSheet.create({})