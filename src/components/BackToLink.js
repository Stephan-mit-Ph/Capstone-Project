import styled from 'styled-components'
import ChevronLeft from './Icons/ChevronLeft'
import Link from 'next/link'

const StyledLink = styled(Link)`
  width: 300px;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-size: 1.1rem;
  padding-top: 0.5rem;
  font-weight: 400;
  letter-spacing: 0.03em;

  :hover {
    color: lightblue;
    transition: 1s;
  }
`

export default function BackToLink({ children, href }) {
  return (
    <StyledLink href={href}>
      <ChevronLeft />
      {children}
    </StyledLink>
  )
}
