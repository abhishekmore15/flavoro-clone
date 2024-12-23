import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './Slices/CardSlices'
import catagorySlice from './Slices/CatagorySlice'
import SearchSlice from './Slices/SearchSlice'

const store = configureStore({
  reducer:{
  cart : CartSlice,
  category : catagorySlice ,
  search : SearchSlice ,
  },
});


export default store;