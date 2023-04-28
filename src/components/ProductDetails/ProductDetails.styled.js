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

  :hover {
    color: var(--secondary-color-500);
    border: 0.5px solid var(--secondary-color-300);
    transition: 1s;
  }

  :active {
    color: var(--primary-color-300);
    border: 0.5px solid var(--primary-color-300);
    transition: 0.5s;
  }
`

export const StyledCartIcon = styled(Cart)`
  fill: currentColor;
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
  font: var(--font-body-medium);
`

export const StyledPrice = styled.p`
  font: var(--font-body-medium);
`
