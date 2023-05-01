import styled from 'styled-components'
import { PlusSquare, MinusSquare } from '../Icons'

export const StyledInput = styled.input`
  background-color: transparent;
  color: var(--text-color);
  margin: 0.5rem;
`

export const StyledPlusSquare = styled(PlusSquare)`
  color: var(--text-color);
  width: 2rem;
  height: 2rem;
  background-color: transparent;
`

export const StyledMinusSquare = styled(MinusSquare)`
  color: var(--text-color);
  width: 2rem;
  height: 2rem;
  background-color: transparent;
`

export const StyledButton = styled.button`
  background-color: transparent;
  transition: background-color 0.1s ease-in-out;
  border: 0.5px solid var(--text-color);
  border-radius: 5px;
  height: fit-content;

  @media (hover: hover) {
    &:hover {
      background-color: var(--secondary-color-700-opacity-20);
      transition: background-color 0.7s ease-in-out;
    }
  }

  &:active {
    background-color: var(--secondary-color-400-opacity-20);
    transition: background-color 0.1s ease-in-out;
  }

  @media (hover: none) {
    &:active {
      background-color: var(--secondary-color-400-opacity-20);
      transition: background-color 0.1s ease-in-out;
    }
  }
`

export const StyledWrapper = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const StyledPrice = styled.p`
  font: var(--font-body-large);
`
