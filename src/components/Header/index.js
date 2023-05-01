import { StyledHeader, StyledLinkTitle, StyledNavbar } from './Header.styled'
import LinkWrapper from '../LinkWrapper'

export default function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledNavbar>
          <LinkWrapper href="/" aria-label="Link to Homepage" alt="Link to Homepage"  >
            <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
          </LinkWrapper>
          {children}
        </StyledNavbar>
      </StyledHeader>
    </>
  )
}
