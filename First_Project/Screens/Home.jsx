import { Image, KeyboardAvoidingView,FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Svg, { Circle } from 'react-native-svg';
import CircularProgress from '../utlits/CircularProgress'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { post_get_service, post_service } from '../services/post_services';
const Home = () => {
  const navigation = useNavigation()
  
  const [post, setpost] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await post_get_service() // Replace with your actual API URL
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

  // const progress = [
  //   {
  //     title: "Productivity Mobile App",
  //     title1: "Create Detail Booking",
  //     min: "2 min ago",
  //     progressBar: "60%"
  //   },
  //   {
  //     title: "Banking Mobile App",
  //     title1: "Revision Home Page",
  //     min: "5 min ago",
  //     progressBar: "70%"
  //   },
  //   {
  //     title: "Online Course",
  //     title1: "Working On Landing Page",
  //     min: "7 min ago",
  //     progressBar: "80%"
  //   },
  //   {
  //     title: "Productivity Mobile App",
  //     title1: "Create Detail Booking",
  //     min: "2 min ago",
  //     progressBar: "60%"
  //   }
  // ]
  const press_Handle = () => {
    navigation.navigate('todayTask')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: 'white', padding: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white', height: '100%' }}>
        <View style={{ paddingTop: 30 }}>
          <View style={{ marginStart: 50, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Text style={{ width: "15%", fontSize: 30 }}><MaterialCommunityIcons name='widgets-outline' color="#000" size={30} /></Text>
            <Text style={{ width: "30%", fontSize: 20, color: "#000" }}>Friday, 26</Text>
            <Text style={{ width: "30%" }}><Feather name='bell' color="#000" size={30} /></Text>
          </View>
          <View>
            <Text style={{ fontSize: 30, color: 'black', padding: 30 }}>
              Let’s make a habits together 🙌
            </Text>
          </View>
          <ScrollView horizontal>
            <View style={{ backgroundColor: 'blue', marginHorizontal: 20, borderWidth: 1, borderRadius: 10, padding: 1 }}>
              <Text style={{ color: 'white', padding: 10, fontSize: 30 }}>Application Design</Text>
              <Text style={{ color: 'white', padding: 10 }}>UI Design Kit</Text>
              <View style={{ flexDirection: 'row', gap: -1 }}>
                <Image resizeMode='cover' style={{ position: 'relative', left: 10 }} source={require("../assets/user3.png")} />
                <Image resizeMode='cover' source={require("../assets/user1.png")} />
                <Image resizeMode='cover' style={{ position: 'relative', right: 10 }} source={require("../assets/user2.png")} />

                <View style={{ gap: 5 }}>
                  <Text style={{ color: 'white' }}>
                    Progress
                  </Text>
                  <Text style={{ borderWidth: 1, height: 1, borderColor: 'white' }}>

                  </Text>
                </View>
                <Text style={{ fontSize: 20, color: 'white', paddingStart: 20 }}>
                  50/80
                </Text>

              </View>
              {/* New Slide */}
            </View>
            <View style={{ borderColor: 'black', marginHorizontal: 20, borderWidth: 1, borderRadius: 10, padding: 5 }}>
              <Text style={{ color: 'black', padding: 10, fontSize: 30 }}>Application Design</Text>
              <Text style={{ color: 'black', padding: 10 }}>UI Design Kit</Text>
              <View style={{ flexDirection: 'row', gap: -1 }}>
                <Image resizeMode='cover' style={{ position: 'relative', left: 10 }} source={require("../assets/user3.png")} />
                <Image resizeMode='cover' source={require("../assets/user1.png")} />
                <Image resizeMode='cover' style={{ position: 'relative', right: 10 }} source={require("../assets/user2.png")} />

                <View style={{ gap: 5 }}>
                  <Text style={{ color: 'black' }}>
                    Progress
                  </Text>
                  <Text style={{ borderWidth: 1, height: 1, borderColor: 'black' }}>

                  </Text>
                </View>
                <Text style={{ fontSize: 20, color: 'black', paddingStart: 20 }}>
                  50/80
                </Text>

              </View>
            </View>
          </ScrollView>


          {/* 
          </View> 
          <View style={{flexDirection:'row',height:120}}>
          <View style={{width:'60%',marginHorizontal:20}}>
            <Text>Productivity Mobile App</Text>
            <Text style={{fontSize:20}}>Create Detail Booking</Text>
            <Text style={{paddingVertical:4}}>2 min ago</Text>


          </View>
          <View
      style={{width: 100,height: 100,borderRadius: 50,borderWidth: 8,borderTopColor:'blue',borderBottomColor:'blue',borderRightColor:'blue',justifyContent:'center',alignItems: 'center'
      }}
    ><Text style={{fontSize:20}}>60%</Text></View> */}


        </View>
        <View style={{paddingStart:10,paddingEnd:10,gap:20}}>
          <Text style={{fontSize:30,color:'black',paddingTop:20,paddingStart:10}}>In Process</Text>
        <FlatList
        style={{}}
      data={post}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postContent}>{item.description}</Text>
          <Text style={styles.postUser}>By: {item.user_id.username}</Text>
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

export default Home
{/*     
        <SafeAreaView style={{flex:1}}>
      <CircularProgress color='blue' percentage={60} />
    </SafeAreaView> */}

    const styles = StyleSheet.create({
      postContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
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