import { useShopStore } from '../../store'
import { ShopLink, StyledHeader, StyledLinkTitle, StyledNavbar } from './Header.styled'

export default function Header({ children }) {
  const cart = useShopStore((state) => state.cart)
  return (
    <>
      <StyledHeader>
        <StyledNavbar>
          <ShopLink href={'/'} aria-label="Link to Homepage">
            <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
          </ShopLink>
          {children}
        </StyledNavbar>
      </StyledHeader>
    </>
  )
}
