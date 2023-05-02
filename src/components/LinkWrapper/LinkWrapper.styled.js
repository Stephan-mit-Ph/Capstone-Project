import styled from 'styled-components'
import Link from 'next/link'

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.7s ease-in-out;
  height: fit-content;

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
