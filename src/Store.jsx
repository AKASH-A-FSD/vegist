import { createSlice,configureStore } from "@reduxjs/toolkit";

let cart=createSlice({
    name:"box",
    initialState:{
        index:""
    },
    reducers:{
       array(store,actions){
        console.log("hai");
        
       }
    }
})

export let myreducer=cart.actions;
let store=configureStore(cart)
export default store;