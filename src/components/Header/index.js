import { StyledHeader, StyledLinkTitle, StyledNavbar } from './Header.styled'
import StyledLink from '../StyledLink'

export default function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledNavbar>
          <StyledLink href={'/'} aria-label="Link to Homepage">
            <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
          </StyledLink>
          {children}
        </StyledNavbar>
      </StyledHeader>
    </>
  )
}
