import { createStore, combineReducers } from "redux";
import cartReducer from "./features/cart/cartSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
