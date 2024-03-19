import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { showModal } from "../features/showModal/showModalSice";
import Modal from "./Modal";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  const isModalShow = useSelector((store) => store.showModal.show);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total{" "}
            <span>
              {total.toLocaleString("US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(showModal())}>
          clear cart
        </button>
      </footer>
      {isModalShow && <Modal />}
    </section>
  );
};
export default CartContainer;
