import { configureStore } from '@reduxjs/toolkit'
import  modalReducer  from './reducers/modalreducer';


const Store = configureStore({
  reducer: {    
    modalReducer : modalReducer,    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  
})


export default Store;

