import { configureStore } from '@reduxjs/toolkit'
import  navigationSlice from './slices/navigationSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        navigationSlice,
        cartSlice,
    },
  })