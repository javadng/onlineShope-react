import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;

      state.totalPrice = state.items.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
          totalPrice: newItem.price,
          name: newItem.name,
        });

        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * newItem.price;
        state.totalPrice += existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.totalPrice -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
