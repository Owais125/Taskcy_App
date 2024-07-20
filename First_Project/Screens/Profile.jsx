import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Ant from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { check_auth_service } from '../services/auth_services';


const Profile = () => {
  const navigation = useNavigation()
  const [post, setpost] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await check_auth_service() // Replace with your actual API URL
        if (response.data.success) {
console.log(response.data)

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
  // console.log("post",post.email.slice(0, 1).toUpperCase())
  const nikName = post?.email?.slice(0, 1).toUpperCase() || ''

  const press_handle2 = () => {
    navigation.navigate('Home')
  }
  const pressHandle1 = () => {
    navigation.navigate('Project')
    
  }
  const pressHandle3 = ()=>{
    navigation.navigate('setting')
    
  }
  const pressHandle4 = ()=>{
    navigation.navigate('Home')

  }
  
  return (
    <ScrollView>

    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' ,paddingTop:10}}>
          <TouchableOpacity onPress={press_handle2}>
            <Ant name='left' color="#000" size={30} />

          </TouchableOpacity>
          <Text style={{ fontSize: 40, color: 'black ',fontWeight:'bold' }}> Profile</Text>
          <Text style={{ fontSize: 0, color: 'white ',fontWeight:'bold' }}> </Text>
          
        </View>
        <View style={{alignItems:'center'}}>
            <View style={{border:1,borderWidth:1,borderColor:'black',width:100,height:100,borderRadius:50,marginTop:30,justifyContent:'center',alignItems:'center',backgroundColor:'#5b48fc'}}>
              <Text style={{fontSize:40}}>{nikName}</Text>

            </View>
            <Text style={{fontSize:15,paddingTop:10}}>{post.username}</Text>
            <Text style={{fontSize:15,paddingTop:10}}>@{post.email}</Text>


          </View>
          <View>

          <View style={{paddingTop:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:25}}>
            <Text style={{fontSize:20,color:'black'}}>My Project</Text>
           <TouchableOpacity onPress={pressHandle1}>
           <Ant style={{paddingTop:0,color:'black'}} size={30} name="right"/>
           </TouchableOpacity>
          </View>
          <View style={{paddingTop:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:25}}>
            <Text style={{fontSize:20,color:'black'}}>Settings</Text>
           <TouchableOpacity onPress={pressHandle3}>
           <Ant style={{paddingTop:0,color:'black'}} size={30} name="right"/>
           </TouchableOpacity>
          </View>
          <View style={{paddingTop:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:25}}>
            <Text style={{fontSize:20,color:'black'}}>My Task</Text>
           <TouchableOpacity onPress={pressHandle4}>
           <Ant style={{paddingTop:0,color:'black'}} size={30} name="right"/>
           </TouchableOpacity>
          </View>

          <TouchableOpacity style={{alignItems:'center',paddingTop:40}}>
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
                              Logout
                            </Text>
                        </TouchableOpacity>
          </View>
    </ScrollView>

  )
}

export default Profile

const styles = StyleSheet.create({})