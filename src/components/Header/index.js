import { useShopStore } from '../../store'
import { ShopLink, CartLink, StyledHeader, StyledLinkTitle, StyledBadge, StyledShopIcon, StyledNavbar } from './Header.styled'

export default function Header() {
  const cart = useShopStore((state) => state.cart)
  return (
    <>
      <StyledHeader>
        <StyledNavbar>
          <ShopLink href={'/'} aira-label="Link to Homepage">
            <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
          </ShopLink>
          <CartLink href="/cart" aira-label="go to Shopping Cart">
            {cart.length > 0 && <StyledBadge />}
            <StyledShopIcon aria-hidden='true' />
          </CartLink>
        </StyledNavbar>
      </StyledHeader>
    </>
  )
}
