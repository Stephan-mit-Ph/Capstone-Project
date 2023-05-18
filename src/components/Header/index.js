import { StyledHeader, StyledLinkTitle, StyledBadge, StyledShopIcon, StyledButton } from './Header.styled'
import LinkWrapper from '../LinkWrapper'
import { useShopStore } from '../../store'

export default function Header() {
  const { cart, toggleCart } = useShopStore()

  return (
    <>
      <StyledHeader>
        <LinkWrapper href="/" aria-label="Link to Homepage" alt="Link to Homepage">
          <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
        </LinkWrapper>
        <StyledButton onClick={toggleCart} aria-label="open shopping cart">
          {cart.length > 0 && <StyledBadge />}
          <StyledShopIcon aria-hidden="true" />
        </StyledButton>
      </StyledHeader>
    </>
  )
}
