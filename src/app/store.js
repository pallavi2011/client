import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice';
import taskReducer from '../components/features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer
    
  },
})