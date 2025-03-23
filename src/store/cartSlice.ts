import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from ".";
import { type Product, type Cart } from "../types";

const initialState: Cart = {
  products: [],
  quantity: 0,
  productQty: 0,
};
// TODO
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.products.push(payload);
    },
    deleteProductFromCart: (state, { payload }) => {
      state.products.filter((product) => product._id !== payload);
    },
    emptyCart: (state) => {
      state.products = [];
    },
    increment: (state) => {
      state.productQty += 1;
    },
    decrement: (state) => {
      state.productQty -= 1;
    },
    geTotalCartPrice: (state) => {
      state.quantity = state.products.reduce((acc, product) => acc + product.price, 0);
    },
    // getTotalProductQuantityPrice: () => {},
  },
});

export const { deleteProductFromCart, geTotalCartPrice, emptyCart, increment, decrement, addToCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cartSlice.products;
export default cartSlice.reducer;
