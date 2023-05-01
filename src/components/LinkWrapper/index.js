import { StyledLink } from './LinkWrapper.styled'

export default function LinkWrapper({ href, alt, children, ariaLabel }) {
  return (
    <StyledLink href={href} alt={alt} aria-label={ariaLabel}>
      {children}
    </StyledLink>
  )
}
