import styled from 'styled-components'
import ChevronLeft from './Icons/ChevronLeft'
import Link from 'next/link'

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  font-weight: 400;

  :hover {
    color: var(--secondary-color-500);
    transition: 1s;
  }
`
const StyledChevronLeft = styled(ChevronLeft)`
  fill: currentColor;

  :hover {
    color: var(--secondary-color-500);
  }
`

export default function BackToLink({ children, href }) {
  return (
    <StyledLink href={href}>
      <StyledChevronLeft />
      {children}
    </StyledLink>
  )
}
