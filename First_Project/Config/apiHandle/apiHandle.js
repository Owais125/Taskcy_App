import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";





  
const baseURL = 'https://fmp-backend-iota.vercel.app'

export const apiHandle = axios.create({
  baseURL,
  headers: {
    ...axios.defaults.headers,
    'Content-Type': 'application/json'


  },

})


axios.defaults.timeout = 15000;
apiHandle.interceptors.request.use(async req => {
  const auth_token = await AsyncStorage.getItem('@token')  || ''
  if (auth_token) {
    req.headers.Authorization = `Bearer ${auth_token}`
  }

  return req

})
