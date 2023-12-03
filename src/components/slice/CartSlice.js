import { createSlice } from "@reduxjs/toolkit";
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("products");
  return cart ? JSON.parse(cart) : [];
};
const updateCartInLocalStorage = (cart) => {
  localStorage.setItem("products", JSON.stringify(cart));
};
export const productSlice = createSlice({
    name: 'productList',
  initialState:{
    products:getCartFromLocalStorage()
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload
      const exitProduct = state.products.find(item => item.id === newProduct.id)
      if(exitProduct){
      exitProduct.amount += 1; 
    } else {
       state.products.push({ ...newProduct, amount: 1 });
    }
    updateCartInLocalStorage(state.products)
    },
    
    removeFromCart:(state,action) =>{
      const removeProduct = action.payload
      state.products =  state.products.filter(item => item.id !== removeProduct)
      updateCartInLocalStorage(state.products)
    },
    clearCart:(state) =>{
        state.products = []
        updateCartInLocalStorage([])
    }
  }
})
