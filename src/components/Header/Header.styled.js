import styled from 'styled-components'
import Link from 'next/link';

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
  z-index: 100;
  background-color: #f7f7f7;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

`;

export const ShopLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`;