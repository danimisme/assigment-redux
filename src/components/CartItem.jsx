import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { addItem, reduceItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispacth = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispacth(removeItem({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispacth(addItem({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispacth(reduceItem({ id }))}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
