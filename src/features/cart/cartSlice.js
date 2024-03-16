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
    case "cart/addItem": {
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
    }
    case "cart/reduceItem": {
      const newItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload.id) {
            if (item.amount === 1) return null;
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item !== null);

      return {
        ...state,
        cartItems: newItems,
        amount: newItems.reduce((total, item) => {
          return total + item.amount;
        }, 0),
        total: newItems.reduce((total, item) => {
          return total + item.price * item.amount;
        }, 0),
      };
    }

    case "cart/removeItem": {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: newItems,
        amount: newItems.reduce((total, item) => {
          return total + item.amount;
        }, 0),
        total: newItems.reduce((total, item) => {
          return total + item.price * item.amount;
        }, 0),
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

export const reduceItem = (id) => {
  return {
    type: "cart/reduceItem",
    payload: id,
  };
};

export const removeItem = (id) => {
  return {
    type: "cart/removeItem",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: "cart/clearCart",
  };
};

export default cartReducer;
