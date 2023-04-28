import Link from 'next/link'
import styled from 'styled-components'

const LinkStyle = styled(Link)`
  font-size: 1.2rem;
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  :hover {
    color: var(--secondary-color-700);
    transition: 1s ease-in-out;
  }
`

function StyledLink({ href, alt, children }) {
  return (
    <LinkStyle href={href} alt={alt}>
      {children}
    </LinkStyle>
  )
}

export default StyledLink
