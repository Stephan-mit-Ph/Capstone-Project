import styled from 'styled-components'
import Cart from '../Icons/Cart'

export const StyledTitle = styled.h2`
  font: var(--font-title);
  margin-bottom: 0;
  margin-top: 0;
  text-align: left;
`
export const StyledSubTitle = styled.h3`
  font: var(--font-subtitle);
  width: 100%;
  padding-bottom: 1.5rem;
  text-align: center;
`

export const StyledButton = styled.button`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-color);
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  border: 0.5px solid var(--text-color);
  border-radius: 5px;

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

export const StyledCartIcon = styled(Cart)`
  fill: inherit;
  width: 1.5rem;
  height: 1.5rem;
`

export const StyledProductDetails = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const StyledQuantity = styled.p`
  font: var(--font-body-large);
`

export const StyledPrice = styled.p`
  font: var(--font-body-large);
`
