import { configureStore } from '@reduxjs/toolkit'
import  modalReducer  from './reducers/modalreducer';
import userReducuer from './reducers/userReducuer';

const Store = configureStore({
  reducer: {    
    modalReducer : modalReducer,  
    userReducuer: userReducuer,  
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  
})


export default Store;

