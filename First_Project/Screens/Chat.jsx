import { Image, KeyboardAvoidingView,FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { message_get_service } from '../services/post_services';
import Ant from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  
  const [post, setpost] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await message_get_service() // Replace with your actual API URL
        if (response.data.success) {


        await  setpost(response.data.data);
        } else {
          setError('Failed to fetch posts');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  const navigation = useNavigation()
  const press_handle1 = () => {
    navigation.navigate('create-chat')

  }
  const press_handle2 = () => {
    navigation.navigate('Home')
  }
  return (
    
    <View style={{paddingStart:10,paddingEnd:10,gap:20,paddingTop:20,paddingBottom:40}}>
      <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity onPress={press_handle2}>
            <Ant name='left' color="#000" size={30} />

          </TouchableOpacity>
          <Text style={{ fontSize: 40, color: 'black ',fontWeight:'bold' }}> Chats</Text>
          <TouchableOpacity onPress={press_handle1}>
            <FontAwesome6 name='plus' color="#000" size={30} />
          </TouchableOpacity>
        </View>
      
    <FlatList
    style={{}}
  data={post}
  keyExtractor={(item) => item._id}
  renderItem={({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.sender}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <Text style={styles.postContent}>{item.timestamp.slice(0,10)}</Text>
    </View>
  )}
/></View>
  )
}

export default Chat

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    gap:10
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    fontSize: 16,
    marginVertical: 5,
  },
  postUser: {
    fontSize: 14,
    color: '#555',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});