
import { createSlice } from "@reduxjs/toolkit"

const initialState = {  
  title: '',  
}

const pagetitleReducer = createSlice({
  name: "page_title",
  initialState,
  reducers: {
    setTitle(state, action){      
      state.title = action.payload;
    },    
  }
})

export const { setTitle } = pagetitleReducer.actions
export default pagetitleReducer.reducer

