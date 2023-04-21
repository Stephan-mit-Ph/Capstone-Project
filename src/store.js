import { create } from 'zustand'

const useShopStore = create((set) => ({
  cart: [],
  addToCart: (productData) =>
    set((state) => {
      return { cart: [...state.cart, productData] }
    }),
  removeFromCart: (id) =>
    set((state) => {
      return { cart: state.cart.filter((item) => item.id !== id) }
    }),

  removeAllItems: () => set({ cart: [] }),
}))
