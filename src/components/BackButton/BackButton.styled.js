import styled from 'styled-components'
import ChevronLeft from '../Icons/ChevronLeft'

export const StyledButton = styled.button`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-top: 1rem;
  padding-left: 1rem;
  margin: 0;
  color: var(--text-color);

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

export const StyledChevronLeft = styled(ChevronLeft)`
  color: inherit;
`
