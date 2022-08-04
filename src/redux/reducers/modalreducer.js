
import { createSlice } from "@reduxjs/toolkit"

const initialState = {  
  isOpen: false,
  content: 1
}

const modalReducer = createSlice({
  name: "message",
  initialState,
  reducers: {
    openModal(state, action){
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal(state, action){
      state.isOpen = false;
    },
  }
})

export const { openModal, closeModal } = modalReducer.actions
export default modalReducer.reducer

