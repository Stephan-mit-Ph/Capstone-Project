import Link from 'next/link'
import styled from 'styled-components'
import { useShopStore } from '../../store'
import Cart from '../Icons/Cart'
import { ShopLink, StyledHeader, StyledLinkTitle } from './Header.styled'

const StyledBadge = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: red;
  color: black;
  position: absolute;
  top: 20%;
  right: 7%;
`

export default function Header() {
  const cart = useShopStore((state) => state.cart)
  return (
    <>
      <StyledHeader>
        <ShopLink href={'/'} aira-label="Link to Homepage">
          <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
        </ShopLink>
        <Link href={'/cart'} aria-label="Link to Cart">
          <Cart />
          {cart.length > 0 && <StyledBadge />}
        </Link>
      </StyledHeader>
    </>
  )
}
