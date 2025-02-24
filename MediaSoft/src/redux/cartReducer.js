export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};


const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return []; 
    default:
      return state;
  }
};
