import styled from 'styled-components'
import Bin from '../Icons/Bin'


export const StyledCartList = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1.5rem;
`

export const StyledCartItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--bg-color-400);
  border-radius: 15px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
  max-width: 90%;
`

export const StyledProductName = styled.h5`
  font: var(--font-body-medium);
`

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const StyledProductInfo = styled.p`
  margin: 0;
  font: var(--font-body-small);
`
export const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: var(--text-color);
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
  justify-content: space-between;
`
export const StyledBin = styled(Bin)`
  fill: var(--text-color);
  width: 1.5rem;
  height: 1.5rem;
  
`;