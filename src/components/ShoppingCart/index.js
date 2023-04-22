import Image from 'next/image'
import { useShopStore } from '../../store'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import { StyledProductInfo, StyledButton, StyledCartItem, StyledCartList, StyledProductDetails, StyledProductName } from './ShoppingCart.styled'
import formatCurrency from '../../helpers/formatNumberToCurrency';


function Cart() {
  const { cart, total, removeFromCart, removeAllItems } = useShopStore()

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{formatCurrency(item.price)}</p>
          <p>{item.quantity}</p>
          <Image src={item.image[0].path} alt={item.name} width={100} height={100} />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: {formatCurrency(total)}</p> {/* display the total sum */}
      <button onClick={removeAllItems}>Clear cart</button>
    </div>
  )
}

export default Cart
