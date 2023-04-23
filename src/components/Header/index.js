import { useShopStore } from '../../store'
import { ShopLink, CartLink, StyledHeader, StyledLinkTitle, StyledBadge, StyledShopIcon } from './Header.styled'

export default function Header() {
  const cart = useShopStore((state) => state.cart)
  return (
    <>
      <StyledHeader>
        <ShopLink href={'/'} aira-label="Link to Homepage">
          <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
        </ShopLink>
        <CartLink href='/cart' aira-label="Link to Cart">
          {cart.length > 0 && <StyledBadge />}
          <StyledShopIcon />
        </CartLink>
      </StyledHeader>
    </>
  )
}
