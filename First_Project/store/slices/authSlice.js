import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth:false,
    loading:true,
    profile:null

}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        authAction:(state, actions)=> {
          state.auth = actions.payload.auth
          state.profile = actions.payload.profile
          state.loading = false
    
        }
    }

})

export const {authAction} = authSlice.actions
export default authSlice.reducer