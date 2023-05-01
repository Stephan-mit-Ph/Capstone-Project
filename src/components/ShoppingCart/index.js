import Image from 'next/image'
import formatPrice from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import {
  StyledBin,
  StyledButton,
  StyledCardBin,
  StyledCartItem,
  StyledCartList,
  StyledDetailsWrapper,
  StyledImageWrapper,
  StyledProductInfo,
  StyledProductName,
} from './ShoppingCart.styled'
import { toast } from 'react-toastify'

function ShoppingCart() {
  const { cart, total, removeFromCart, removeAllItems } = useShopStore()

  const removeFromCartNotification = () => {
    toast.error(
      `Item removed from cart!
    `,
      {
        position: 'bottom-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }
    )
  }

  const removeAllItemsNotification = () => {
    toast.error(
      `All items removed from cart!
    `,
      {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }
    )
  }
  return (
    <StyledCartList role="list">
      <StyledSubTitle>My Cart</StyledSubTitle>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map((item) => (
        <StyledCartItem role="listItem" key={item.id}>
          <StyledProductName>{item.name}</StyledProductName>
          <StyledImageWrapper>
            <Image src={item.image[0].path} alt={item.name} width={100} height={100} />
            <StyledDetailsWrapper>
              <StyledProductInfo>{formatPrice(item.price)}</StyledProductInfo>
              <StyledProductInfo>Qty: {item.quantity}</StyledProductInfo>
            </StyledDetailsWrapper>
            <StyledButton type="button" onClick={() => removeFromCart(item.id) & removeFromCartNotification()} aria-label="remove item from cart">
              <StyledBin aria-hidden="true" />
            </StyledButton>
          </StyledImageWrapper>
        </StyledCartItem>
      ))}
      <StyledProductInfo>Total: {formatPrice(total)}</StyledProductInfo> {/* display the total sum */}
      <StyledButton type="button" onClick={() => removeAllItems() & removeAllItemsNotification()} aria-label="remove all items">
        Delete all items
        <StyledBin aria-hidden="true" />
      </StyledButton>
    </StyledCartList>
  )
}

export default ShoppingCart
