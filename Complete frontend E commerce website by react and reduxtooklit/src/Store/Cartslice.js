import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
   name:"Carts",
   initialState:[]
   ,
   reducers:({
   //reducer
   addtocart(state,action){
    state.push(action.payload)
   },
   remove(state,action){
  
     return state.filter((item) => (item.id) !== action.payload);
    
   
   }
  
   ,
   })
});
export const{addtocart,remove}=cartslice.actions;
export default cartslice.reducer;