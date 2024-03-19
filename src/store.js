import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./features/cart/cartSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import showModalReducer from "./features/showModal/showModalSice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  showModal: showModalReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
