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
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid white;
  padding: 8px 16px;
  gap: 0.5rem;
  font-size: 0.85rem;
  background-color: transparent;
  border-radius: 5px;

  :hover {
    background-color: red;
    transition: 0.5s;
  }
`

export const StyledCartIcon = styled(Cart)`
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
`;