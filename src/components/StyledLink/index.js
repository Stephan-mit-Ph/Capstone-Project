import { LinkStyle } from './StyledLink.styled'

export default function StyledLink({ href, alt, children }) {
  return (
    <LinkStyle href={href} alt={alt}>
      {children}
    </LinkStyle>
  )
}
