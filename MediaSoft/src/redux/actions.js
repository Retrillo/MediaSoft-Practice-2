// src/redux/actions.js

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  // actions/cartActions.js
export const clearCart = () => ({
  type: 'CLEAR_CART',
});
