import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice'
import productsSlice from './reducers/productsSlice'
import cartSlice from './reducers/cartSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        cart: cartSlice,
    }
})