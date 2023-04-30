import styled from 'styled-components'
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
  left: 2rem;
  bottom: 0.8rem;
`

export const StyledShopIcon = styled(Cart)`
  color: inherit;
  font-size: 2.3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`
