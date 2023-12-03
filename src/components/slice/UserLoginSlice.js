import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../axios-instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const login = createAsyncThunk('login',
  async data => {
  const response = await api.get(`/users?name=${data.name}&&password=${data.password}`)
  return response.data;
})

export const UserLoginSlice = createSlice({
  name: 'userLogin',
  initialState: {
    name: '',
    password:'',
    id: '',
    isLoginSuccess: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.id = action.payload.id
      state.isLoginSuccess = true
    },
    logout: (state) =>{
      state.isLoginSuccess = false
      localStorage.removeItem('name');
      localStorage.removeItem('password');
      localStorage.removeItem('id');
    }
  },
  extraReducers(builder){
    builder.addCase(login.fulfilled, (state, action) => {
      
      if (action.payload.length > 0) {
        state.name = action.payload[0].name;
        state.password = action.payload[0].password;
        state.id = action.payload[0].id;
        state.isLoginSuccess = true;

        //local storage 
        localStorage.setItem('name', action.payload[0].name)
        localStorage.setItem('password', action.payload[0].password)
        localStorage.setItem('id', action.payload[0].id)
      } else {
        state.isLoginSuccess = false
      }
    })
  }
})

export const { loginSuccess, logout } = UserLoginSlice.actions;
export default UserLoginSlice.reducer;