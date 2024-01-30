import { useContext } from "react";
import { currencyFormatter } from "../utils/formatter";
import { CartContext } from "../store/CartContext";

function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </div>
  );
}

export default CartItem;
