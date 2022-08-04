import { configureStore } from '@reduxjs/toolkit'
import  modalReducer  from './reducers/modalreducer';
import pagetitleReducuer from './reducers/pagetitleReducuer';

const Store = configureStore({
  reducer: {    
    modalReducer : modalReducer,  
    pagetitleReducuer: pagetitleReducuer,  
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  
})


export default Store;

