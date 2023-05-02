import { useEffect } from 'react'
import { useState } from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'react-toastify'

const useShopStore = createLocalStorageStore((set) => {
  return {
    cart: [],
    total: 0,
    addToCart: (id, productData, quantity) =>
      set((state) => {
        if (state.cart.some((item) => item.id === id)) {
          const newCart = state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + quantity } : item))
          const newTotal = state.total + quantity * productData.price
          toast.success(`Added ${quantity}x ${productData.name} to cart`, {
            position: 'bottom-center',
            theme: 'dark',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          })

          return { cart: newCart, total: newTotal }
        }
        const newCart = [...state.cart, { ...productData, quantity }]
        const newTotal = state.total + quantity * productData.price
        return { cart: newCart, total: newTotal }
      }),
    removeFromCart: (id) =>
      set((state) => {
        const itemToRemove = state.cart.find((item) => item.id === id)
        const newCart = state.cart.filter((item) => item.id !== id)
        const newTotal = state.total - itemToRemove.price * itemToRemove.quantity
        toast.error(`Removed ${itemToRemove.quantity}x ${itemToRemove.name} from cart`, {
          position: 'bottom-center',
          theme: 'dark',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        })
        return { cart: newCart, total: newTotal }
      }),
    removeAllItems: () =>
      set((state) => {
        toast.error('Removed all items from cart', {
          position: 'bottom-center',
          theme: 'dark',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        })
        return { cart: [], total: 0 }
      }),
    toggleCart: () =>
      set((state) => {
        return { ...state, isCartOpen: !state.isCartOpen }
      }),
  }
}, 'shop-store')

function createLocalStorageStore(initialStore, name) {
  // Create a Zustand store without persistence.
  const useServerStore = create(initialStore)
  // Create a Zustand store with persistence to local storage.
  const useClientStore = create(persist(initialStore, { name }))

  // A custom hook that selects the appropriate store based on whether
  // the component is hydrated or not.
  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
      setHydrated(true)
    }, [])

    const clientStore = useClientStore(selector, compare)
    const serverStore = useServerStore(selector, compare)

    return hydrated ? clientStore : serverStore
  }

  return useStore
}

export { useShopStore }

/*
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
*/
