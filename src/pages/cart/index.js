import { useShopStore } from '../../store'

export default function CartPage() {
  const cart = useShopStore((state) => state.cart)
  /*  const currentProduct = cart[0].id */

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart && cart.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.sum}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
