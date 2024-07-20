import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign'
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const Setting = () => {
  const navigation = useNavigation()

    const [isPermissionEnabled, setIsPermissionEnabled] = useState(false);
    const [isPushNotificationEnabled, setIsPushNotificationEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    const press_handle2 = () => {
        navigation.navigate('Profile')
      }     
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={{ backgroundColor:'white',flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' ,paddingTop:30,paddingHorizontal:20}}>
          <TouchableOpacity onPress={press_handle2}>
            <Ant name='left' color="#000" size={30} />

          </TouchableOpacity>
          <Text style={{ fontSize: 40, color: 'black ',fontWeight:'bold' }}> Settings</Text>
          <Text style={{ fontSize: 0, color: 'white ',fontWeight:'bold' }}> </Text>
          
        </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Permission</Text>
          <Switch
            value={isPermissionEnabled}
            onValueChange={setIsPermissionEnabled}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isPermissionEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
  
        <View style={styles.row}>
          <Text style={styles.text}>Push Notification</Text>
          <Switch
            value={isPushNotificationEnabled}
            onValueChange={setIsPushNotificationEnabled}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isPushNotificationEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
  
        <View style={styles.row}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={setIsDarkModeEnabled}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
  
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Security</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Help</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Language</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>About Application</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
     
      </ScrollView>
    );
}

export default Setting


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#ffffff',
      paddingTop:18,
      gap:20,
      backgroundColor:'white'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee',
    },
    text: {
      fontSize: 16,
      color: '#333333',
    },
    arrow: {
      fontSize: 16,
      color: '#333333',
    },
  });