import Image from 'next/image'
import formatPrice from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import {
  StyledBin,
  StyledButton,
  StyledCartItem,
  StyledCartList,
  StyledDetailsWrapper,
  StyledImageWrapper,
  StyledProductInfo,
  StyledProductName,
} from './ShoppingCart.styled'
import SubTitle from '../SubTitle'

function ShoppingCart() {
  const { cart, total, removeFromCart, removeAllItems } = useShopStore()

  return (
    <StyledCartList role="list">
      <SubTitle text="My Cart" />
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
            <StyledButton type="button" onClick={() => removeFromCart(item.id)} aria-label="remove item from cart">
              <StyledBin aria-hidden="true" />
            </StyledButton>
          </StyledImageWrapper>
        </StyledCartItem>
      ))}
      <StyledProductInfo>Total: {formatPrice(total)}</StyledProductInfo> {/* display the total sum */}
      <StyledButton type="button" onClick={() => removeAllItems()} aria-label="remove all items">
        Delete all items
        <StyledBin aria-hidden="true" />
      </StyledButton>
    </StyledCartList>
  )
}

export default ShoppingCart
