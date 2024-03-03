import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((i) => (
          <CartItem
            key={i.id}
            item={{
              id: i.id,
              title: i.title,
              quantity: i.quantity,
              total: i.quantity * i.price,
              price: i.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
