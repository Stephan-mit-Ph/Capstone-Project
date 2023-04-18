import Cart from '../Icons/Cart'
import { StyledLinkTitle, StyledHeader, ShopLink } from './Header.styled'



export default function Header() {
  return (
    <>
      <StyledHeader>
        <ShopLink href={'/'} aira-label="Link to Homepage">
          <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
        </ShopLink>
        <Cart />
      </StyledHeader>
    </>
  )
}
