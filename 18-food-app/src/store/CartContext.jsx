import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "add") {
    const updatedItems = [...state.items];
    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingItemIndex > -1) {
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        ...action.item,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "remove") {
    const updatedItems = [...state.items];
    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = updatedItems[existingItemIndex];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "clear_cart") {
    return {
      ...state,
      items: [],
    };
  }

  return state;
}

function CartContextProvider({ children }) {
  const [shoppingCartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({
      type: "add",
      item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "remove",
      id,
    });
  }

  function clearCart() {
    dispatchCartAction({ type: "clear_cart" });
  }

  const cartContext = {
    items: shoppingCartState.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
