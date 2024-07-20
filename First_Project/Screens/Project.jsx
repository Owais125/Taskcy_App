import { Image, KeyboardAvoidingView,FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Ant from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { post_get_service, project_get_service } from '../services/post_services';



const Project = () => {

  const navigation = useNavigation()
 
  const [post, setpost] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await project_get_service() // Replace with your actual API URL
        if (response.data.success) {


          setpost(response.data.data);
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



  const press_handle1 = () => {
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: 'white', paddingTop: 20 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={press_handle1}
          >
            <Ant name='left' color="#000" size={30} />

          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'black ' }}>Monthly Task</Text>
          <TouchableOpacity
          // onPress={press_handle1}
          >
            <FontAwesome6 name='circle-plus' color="#000" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 60 }}>
          <TextInput keyboardType='Search' style={{ borderColor: "black", borderWidth: 2, width: 350, borderRadius: 10, padding: 10 }} placeholder='Enter The Email' />

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
          <View style={{ gap: 10, flexDirection: 'row', marginVertical: 20, margin: 10 }}>
            <Text style={{ border: 1, borderWidth: 1, padding: 8, borderRadius: 15 }}>Favourites</Text>
            <Text style={{ border: 1, borderWidth: 1, padding: 8, borderRadius: 15 }}>Recents</Text>
            <Text style={{ border: 1, borderWidth: 1, padding: 8, borderRadius: 15 }}>All</Text>
          </View>
          <View>
            <MaterialCommunityIcons name='widgets-outline' color="#000" size={30} />
          </View>
        </View>



        {/* <View style={{marginHorizontal:20,border:1,borderWidth:1,height:70}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <Text style={{paddingStart:20,paddingTop:10}}>Unity Dashboard ☺</Text>
              <Text>10/20</Text>
          </View>
          <Text style={{marginHorizontal:30}}>Design</Text>
        </View> */}
 <View style={{paddingStart:10,paddingEnd:10,gap:20}}>
        <FlatList
        style={{}}
      data={post}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postContent}>{item.description}</Text>
          <Text style={styles.postContent}>Team Members:{item.members}</Text>
          {/* <Text style={styles.postUser}>By: {item.user_id.username}</Text> */}
        </View>
      )}
    />
          {/* {
            progress.map((elem, i) => {
              return <TouchableOpacity onPress={press_Handle}><View key={i} style={{ flexDirection: "row", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 15, borderColor: "#c1bbbb", justifyContent: "space-between" }}>
                <View>
                  <Text style={{ fontSize: 15 }}>
                    {elem.title}
                  </Text>
                  <Text style={{ fontSize: 20, color: "black", paddingVertical: 5 }}>
                    {elem.title1}
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    {elem.min}
                  </Text>
                </View>
                <View
                  style={{
                    width: 60, height: 60, borderRadius: 50, borderWidth: 4, borderTopColor: '#D1E2FE', borderBottomColor: 'blue', borderRightColor: 'blue', justifyContent: 'center', alignItems: 'center',
                    borderLeftColor: "#D1E2FE"
                  }}
                ><Text style={{ fontSize: 15 }}>{elem.progressBar}</Text></View>
              </View></TouchableOpacity>
            })
          } */}

        </View>



      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Project

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    gap:10
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"black"
  },
  postContent: {
    fontSize: 16,
    marginVertical: 5,
    color:"black"
  },
  postUser: {
    fontSize: 14,
    color: '#555',
    color:"black"
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