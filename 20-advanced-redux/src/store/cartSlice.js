import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], changed: false },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      const item = state.items.find((x) => x.id === action.payload.id);
      state.changed = true;
      if (item) {
        item.quantity++;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
        });
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex((x) => x.id === action.payload);
      state.changed = true;
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity >= 2) {
          item.quantity--;
          item.total = item.quantity * item.price;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
