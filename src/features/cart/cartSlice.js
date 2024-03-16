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
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, amount: 1 }],
      };

    case "cart/clearCart":
      return {
        ...state,
        cartItems: [],
        amount: 0,
        total: 0,
      };

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

export const clearCart = () => {
  return {
    type: "cart/clearCart",
  };
};

export default cartReducer;
