import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const {} = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items your shopping cart?</h4>
        <button
          className="btn confirm-btn"
          onClick={() => {
            dispatch(clearCart());
			dispatch(closeModal())
          }}
        >
          confirm
        </button>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(closeModal())}
        >
          cancel
        </button>
      </div>
    </aside>
  );
};

export default Modal;
