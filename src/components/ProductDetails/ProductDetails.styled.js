import styled from 'styled-components'
import Cart from '../Icons/Cart'
import { StyledCartList } from '../ShoppingCart/ShoppingCart.styled';

export const StyledTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: inherit;
  font-weight: 370;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.1em;
  width: 325px;
`
export const StyledSubTitle = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-bottom: 0;
  margin-top: 10px;
  text-align: left;
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