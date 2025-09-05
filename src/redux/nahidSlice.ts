/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface initialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: any;
}
const initialState: initialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const nahidSlice = createSlice({
  name: "nahid",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }else{
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    
    decreaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },

    removeFromCart:(state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload);
    },

    resetCart:(state) =>{
      state.cart = [];
    },

    // addTOFavorite 

    addToFavorite: (state, action) =>{
      const existingProduct = state?.favorite?.find((item)=> item?.id === action.payload?.id);
      if (existingProduct) {
        state.favorite = state.favorite.filter((item) => item?.id !== action.payload?.id);
      }else{
        state.favorite.push(action.payload);
    };

    },
    resetFavorite:(state) =>{
      state.favorite = [];
    }

  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart, addToFavorite, resetFavorite } = nahidSlice.actions;
export default nahidSlice.reducer;
