import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comparison: []
};

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
   
    addProductToComparison: (state, action) => {
      const existingProduct = state.comparison.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.comparison.push(action.payload);
      }
    },
  
    removeProductFromComparison: (state, action) => {
   
      state.comparison = state.comparison.filter(product => product.id !== action.payload.id);
    },
    clearComparison: (state) => {
      state.comparison = [];
    },
  },
});

export const { addProductToComparison, removeProductFromComparison, clearComparison } = comparisonSlice.actions;
export default comparisonSlice.reducer;
