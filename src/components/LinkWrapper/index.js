import { StyledLink } from './LinkWrapper.styled'

export default function LinkWrapper({ href, children, ariaLabel }) {
  return (
    <StyledLink href={href}  aria-label={ariaLabel}>
      {children}
    </StyledLink>
  )
}
