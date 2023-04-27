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
  StyledProductName
} from './ShoppingCart.styled'

function ShoppingCart() {
  const { cart, total, removeFromCart, removeAllItems } = useShopStore()
  return (
    <StyledCartList role="list">
      <StyledSubTitle>My Cart</StyledSubTitle>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map((item) => (
        <StyledCartItem key={item.id}>
          <StyledProductName>{item.name}</StyledProductName>
          <StyledImageWrapper>
            <Image src={item.image[0].path} alt={item.name} width={100} height={100} />
            <StyledDetailsWrapper>
              <StyledProductInfo>{formatPrice(item.price)}</StyledProductInfo>
              <StyledProductInfo>Qty: {item.quantity}</StyledProductInfo>
            </StyledDetailsWrapper>
            <StyledButton type="button" onClick={() => removeFromCart(item.id)}>
              <StyledCardBin />
            </StyledButton>
          </StyledImageWrapper>
        </StyledCartItem>
      ))}
      <StyledProductInfo>Total: {formatPrice(total)}</StyledProductInfo> {/* display the total sum */}
      <StyledButton type="button" onClick={removeAllItems}>
        Delete all items
        <StyledBin />
      </StyledButton>
    </StyledCartList>
  )
}

export default ShoppingCart
