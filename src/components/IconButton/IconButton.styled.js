import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  transition: color 1s ease-in-out;

  :hover {
    color: var(--secondary-color-800);
  }

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
      color: var(--text-color);
      transition: 0.1s ease-in-out;
    }
  }
`
