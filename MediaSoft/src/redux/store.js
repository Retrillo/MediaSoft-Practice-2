import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; 
import comparisonReducer from './comparisonSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer, 
    comparison: comparisonReducer,
  },
});

export default store;
