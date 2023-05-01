import { LinkStyle } from './StyledLink.styled'

function StyledLink({ href, alt, children, ariaLabel }) {
  return (
    <LinkStyle href={href} alt={alt} aria-label={ariaLabel}>
      {children}
    </LinkStyle>
  )
}

export default StyledLink
