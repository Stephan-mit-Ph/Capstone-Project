import styled from 'styled-components'
import Cart from '../Icons/Cart'

export const StyledTitle = styled.h2`
  font: var(--font-title);
  margin-bottom: 0;
  margin-top: 0;
  text-align: left;
`
export const StyledSubTitle = styled.h2`
  font: var(--font-subtitle);
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
`

export const StyledButton = styled.button`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  border: 0.5px solid var(--text-color);
  padding: 8px 16px;
  gap: 0.5rem;
  font-size: 0.85rem;
  background-color: transparent;
  border-radius: 5px;
  transition: background-color 0.1s ease-in-out;

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
    &:active:enabled {
      background-color: var(--secondary-color-700-opacity-20);
      transition: background-color 0.1s ease-in-out;
    }
  }
`

export const StyledCartIcon = styled(Cart)`
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
`

export const StyledProductDetails = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 300px;
  width: 100%;
  max-width: 330px;
  margin: 0rem 1.25rem 3.25rem 1.25rem;
  padding: 2.25rem;
  border-radius: 15px;
  background-color: var(--bg-color-400);
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
  gap: 1.2rem;

  @media (min-width: 768px) {
    max-width: 380px;
  }
`

export const StyledQuantity = styled.p`
  font: var(--font-body-large);
`

export const StyledPrice = styled.p`
  font: var(--font-body-large);
`
