import { configureStore } from '@reduxjs/toolkit'
import UserLoginSlice from './components/slice/UserLoginSlice'
export default configureStore({
    reducer: {
         userLogin: UserLoginSlice,
    }
})