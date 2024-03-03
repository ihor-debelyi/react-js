import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const CartButton = ({ ...props }) => {
  const dispatch = useDispatch();
  const itemsNumber = useSelector((state) =>
    state.cart.items.reduce((total, i) => i.quantity + total, 0)
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} {...props} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsNumber}</span>
    </button>
  );
};

export default CartButton;
