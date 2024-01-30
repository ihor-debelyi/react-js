import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatter";
import { UserProgressContext } from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";

function Cart() {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const totalPrice = cartContext.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    progressContext.hideCart();
  }

  function handleGoToCheckout() {
    progressContext.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={progressContext.progress === "cart"}
      onClose={progressContext.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <div>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartContext.addItem(item)}
            onDecrease={() => cartContext.removeItem(item.id)}
          />
        ))}
      </div>
      <p className="cart-total">
        Total price: {currencyFormatter.format(totalPrice)}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartContext.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
