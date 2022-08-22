import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hoodies: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCartHoodies(state, action){
        state.hoodies.push(action.payload)
        console.log(action.payload)
        state.totalPrice += action.payload.price
    },
    incrementCount(state, action){
      state.totalPrice += action.payload[0].price
    },
    decrementCount(state, action){
      state.totalPrice -= action.payload[0].price
      if(action.payload[1] === 1){
        console.log(action.payload[0].title)
        let index = state.hoodies.findIndex((item,) => item.title === action.payload[0].title)
        state.hoodies.splice(index, 1)
      }
    }
  }
})

export const { setCartHoodies, incrementCount, decrementCount } = cartSlice.actions

export default cartSlice.reducer