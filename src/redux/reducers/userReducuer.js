
import { createSlice } from "@reduxjs/toolkit"

const initialState = {  
  user: null,  
  isLogin : false
}

const userReducuer = createSlice({
  name: "page_title",
  initialState,
  reducers: {
    userlogin(state, action){      
      state.user = action.payload;
      state.isLogin = true;
    },    
    userlogout(state, action){      
      state.user = null;
      state.isLogin = false;
    },    
  }
})

export const { userlogin, userlogout } = userReducuer.actions
export default userReducuer.reducer

