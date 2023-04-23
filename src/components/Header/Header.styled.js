import styled from 'styled-components'
import Link from 'next/link'
import Cart from '../Icons/Cart3'

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 2.2rem;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  z-index: 100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 8px 4px rgba(0, 0, 0, 0.12);
`
export const StyledLinkTitle = styled.h1`
  font-family: 'orbitron', sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1.5rem;
  margin: 0;
  color: gray;

  :hover {
    color: lightblue;
    transition: 1s;
  }
`

export const ShopLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
`

export const StyledBadge = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: lightblue;
  position: relative;
  bottom: 1rem;
  left: 2.5rem;
`

export const StyledShopIcon = styled(Cart)`
  color: gray;
  font-size: 3rem;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
