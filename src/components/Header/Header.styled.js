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
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  z-index: 100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 8px 4px rgba(0, 0, 0, 0.12);
`

export const StyledLinkTitle = styled.h1`
  font: var(--font-display-title);
  margin: 0;
  color: inherit;
`
export const StyledBadge = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--primary-color-500);
  position: relative;
  left: 2.2rem;
  bottom: 0rem;
`

export const StyledShopIcon = styled(Cart)`
  color: inherit;
  font-size: 3rem;

  @media screen and (max-width: 568px) {
    font-size: 2.3rem;
  }
`
export const StyledButton = styled.button`
  display: flex;
  background: none;
  border: none;
  width: fit-content;
  color: inherit;
  transition: color 0.5s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: var(--secondary-color-700);
      transition: color 0.7s ease-in-out;
    }
  }

  &:active {
    color: var(--secondary-color-400);
    transition: color 0.1s ease-in-out;
  }

  @media (hover: none) {
    &:active {
      color: var(--secondary-color-400);
      transition: color 0.1s ease-in-out;
    }
  }
`
