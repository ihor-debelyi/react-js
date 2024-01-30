import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatter";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/UserProgressContext";
import Button from "./UI/Button";
import { submitOrder } from "../http";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

function Checkout() {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const [isLoading, fetchedData, error, sendRequest, clearData] =
    useHttp(submitOrder);

  const totalPrice = cartContext.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleClose() {
    progressContext.hideCheckout();
  }

  function handleFinish() {
    progressContext.hideCheckout();
    cartContext.clearCart();
    clearData();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const customerData = Object.fromEntries(data.entries());

    sendRequest({
      order: {
        items: cartContext.items,
        customer: customerData,
      },
    });
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isLoading) {
    actions = <span>Sending order data...</span>;
  }

  if (fetchedData && !error) {
    return (
      <Modal
        open={progressContext.progress === "checkout"}
        onClose={handleClose}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progressContext.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>

        <Input type="text" label="Full Name" id="name" required />
        <Input type="email" label="Email Address" id="email" required />
        <Input type="text" label="Street" id="street" required />
        <div className="control-row">
          <Input type="text" label="Postal Code" id="postal-code" required />
          <Input type="text" label="City" id="city" required />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}

export default Checkout;
