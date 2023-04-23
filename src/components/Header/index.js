import { useShopStore } from '../../store'
import { ShopLink, CartButton, StyledHeader, StyledLinkTitle, StyledBadge, StyledShopIcon } from './Header.styled'

export default function Header() {
  const cart = useShopStore((state) => state.cart)
  return (
    <>
      <StyledHeader>
        <ShopLink href={'/'} aira-label="Link to Homepage">
          <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
        </ShopLink>
        <CartButton href={'/cart'} aira-label="Link to Cart">
          {cart.length > 0 && <StyledBadge />}
          <StyledShopIcon />
        </CartButton>
      </StyledHeader>
    </>
  )
}
