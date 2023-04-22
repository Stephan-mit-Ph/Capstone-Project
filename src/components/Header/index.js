import Link from 'next/link'
import styled from 'styled-components'
import { useShopStore } from '../../store'
import Shop from '../Icons/Shop.js'
import { ShopLink, CartLink, StyledHeader, StyledLinkTitle, StyledBadge, StyledShopIcon } from './Header.styled'



export default function Header() {
  const cart = useShopStore((state) => state.cart)
  return (
    <>
      <StyledHeader>
        <ShopLink href={'/'} aira-label="Link to Homepage">
          <StyledLinkTitle>SEC:Tech</StyledLinkTitle>
        </ShopLink>
        <CartLink href={'/cart'} aria-label="Link to Cart">
          <StyledShopIcon  />
          {cart.length > 0 && <StyledBadge />}
        </CartLink>
      </StyledHeader>
    </>
  )
}
