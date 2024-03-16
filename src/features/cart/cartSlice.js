import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: cartItems.reduce((total, item) => {
    return total + item.amount;
  }, 0),
  total: cartItems.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/addToCart":
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }
    default:
      return state;
  }
};

export const addToCart = (product) => {
  return {
    type: "cart/addToCart",
    payload: product,
  };
};

export default cartReducer;
