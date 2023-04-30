import Link from 'next/link'
import styled from 'styled-components'

export const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  transition: color 1s ease-in-out;

  @media (hover: hover) {
    :hover {
      color: var(--secondary-color-800);
      transition: 1s ease-in-out;
    }

    :active {
      color: var(--secondary-color-400);
      transition: 0.1s ease-in-out;
    }
  }
  @media (hover: none) {
    :active {
      color: var(--secondary-color-400);
      transition: 0.1s ease-in-out;
    }
  }
`
