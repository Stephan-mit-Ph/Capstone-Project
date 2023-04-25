import styled from 'styled-components'
import Link from 'next/link'
import Cart from '../Icons/Cart3'

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  z-index: 100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 8px 4px rgba(0, 0, 0, 0.12);
`
export const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1140px;
  justify-content: space-between;
    `;

export const StyledLinkTitle = styled.h1`
  font: var(--font-display-title);
  margin: 0;
  color: var(--text-color);

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
  color: var(--text-color);
  font-size: 3rem;

  @media screen and (max-width: 568px) {
    font-size: 2.3rem;
  }
`
