import { LinkStyle } from './StyledLink.styled'

function StyledLink({ href, alt, children }) {
  return (
    <LinkStyle href={href} alt={alt}>
      {children}
    </LinkStyle>
  )
}

export default StyledLink
