import { useDispatch } from "react-redux";
import { hideModal } from "../features/showModal/showModalSice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispacth = useDispatch();

  const handleConfirm = () => {
    dispacth(clearCart());
    dispacth(hideModal());
    console.log("confirm");
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispacth(hideModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
