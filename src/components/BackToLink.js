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

  @media (hover: hover) {
    &:hover {
      color: var(--secondary-color-700);
      transition: color 0.7s ease-in-out;
    }
  }

  &:active {
    color: var(--secondary-color-400);
    transition: color 0.1s ease-in-out;
  }

  @media (hover: none) {
    &:active {
      color: var(--secondary-color-400);
      transition: color 0.1s ease-in-out;
    }
  }
`
const StyledChevronLeft = styled(ChevronLeft)`
  fill: currentColor;

  :hover {
    color: var(--secondary-color-500);
  }
`

export default function BackToLink({ children, href, ariaLabel }) {
  return (
    <StyledLink href={href} aria-label={ariaLabel}>
      <StyledChevronLeft aria-hidden="true" />
      {children}
    </StyledLink>
  )
}
