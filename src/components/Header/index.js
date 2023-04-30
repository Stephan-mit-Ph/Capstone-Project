import { StyledHeader, StyledNavbar, StyledLinkTitle } from './Header.styled'
import StyledLink from '../StyledLink'


export default function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledNavbar>
          <StyledLink href="/" alt="Home" aria-label="go to home"><StyledLinkTitle>SEC:Tech</StyledLinkTitle></StyledLink>
          {children}
        </StyledNavbar>
      </StyledHeader>
    </>
  )
}
