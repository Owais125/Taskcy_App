// import { apiHandle } from "../config/apiHandle/apiHandle"

import { apiHandle } from "../Config/apiHandle/apiHandle"

export const signup_service = (post_data) => {

   return apiHandle.post('/signup', post_data)
}


export const login_service = (post_data) => {

   return apiHandle.post('/login', post_data)
}




export const check_auth_service = () => {

   return apiHandle.get('/check-auth')
}

export const addTask = (data) => {

   return apiHandle.get('/tasks',data)
}