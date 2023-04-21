import { useEffect } from 'react'
import { useState } from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useShopStore = createLocalStorageStore((set) => {
  return {
    cart: [],
    addToCart: (id, productData, quantity) =>
      set((state) => {
        if (state.cart.some((item) => item.id === id)) {
          return {
            cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + quantity } : item)),
          }
        }
        return { cart: [...state.cart, productData] }
      }),
    removeFromCart: (id) =>
      set((state) => {
        return { cart: state.cart.filter((item) => item.id !== id) }
      }),

    removeAllItems: () => set({ cart: [] }),
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