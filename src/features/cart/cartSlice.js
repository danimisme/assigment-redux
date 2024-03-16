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
    case "cart/addItem":
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
          amount: state.amount + 1,
          total: state.total + item.price,
        };
      }

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

export const addItem = (id) => {
  return {
    type: "cart/addItem",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: "cart/clearCart",
  };
};

export default cartReducer;
