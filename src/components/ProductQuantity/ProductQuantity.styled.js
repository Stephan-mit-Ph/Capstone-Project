import styled from 'styled-components'
import { Plus, Minus } from '../Icons'

export const StyledInput = styled.input`
  background-color: transparent;
  color: var(--text-color);
  margin: 0.5rem;
`

export const StyledPlusSquare = styled(Plus)`
  color: var(--text-color);
  width: 2rem;
  height: 2rem;
`

export const StyledMinusSquare = styled(Minus)`
  color: var(--text-color);
  width: 2rem;
  height: 2rem;
`

export const StyledButton = styled.button`
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  border: 0.5px solid var(--text-color);
  border-radius: 6px;
  width: fit-content;
  height: fit-content;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--secondary-color-800-opacity-20);
      transition: background-color 0.5s ease-in-out;
    }

    &:active:enabled {
      background-color: var(--secondary-color-800);
      transition: background-color 0.1s ease-in-out;
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--secondary-color-800);
      transition: background-color 0.1s ease-in-out;
    }
  }
`

export const StyledWrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
`
export const StyledPrice = styled.p`
  font: var(--font-body-large);
`
