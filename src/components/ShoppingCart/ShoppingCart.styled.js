import styled from 'styled-components'
import Bin from '../Icons/Bin'

export const StyledCartList = styled.ul`
  list-style: none;
  min-width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1.5rem;
`

export const StyledCartItem = styled.li`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--bg-color-400);
  border-radius: 15px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
  max-width: 90%;
  padding: 1rem;
`

export const StyledProductName = styled.h3`
  font: var(--font-body-medium);
`

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const StyledProductInfo = styled.p`
  margin: 0;
  text-align: center;
  font: var(--font-body-medium);
`
export const StyledButton = styled.button`
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: inherit;
  transition: color 0.7s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: var(--primary-color-700);
      transition: color 0.7s ease-in-out;
    }
  }

  &:active {
    color: var(--primary-color-400);
    transition: color 0.1s ease-in-out;
  }

  @media (hover: none) {
    &:active {
      color: var(--primary-color-400);
      transition: color 0.1s ease-in-out;
    }
  }
`

export const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-end;
`

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const StyledBin = styled(Bin)`
  fill: inherit;
  width: 1.5rem;
  height: 1.5rem;
`

