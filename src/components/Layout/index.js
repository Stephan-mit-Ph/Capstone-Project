import { useState } from 'react'
import { useShopStore } from '../../store'
import Header from '../Header'
import ShoppingCart from '../ShoppingCart/index.js'
import { StyledButton, StyledCloseSquare, StyledContainer, StyledMain, StyledSidebar } from './Layout.styled.js'

export default function Layout({ children }) {
  const { isCartOpen, toggleCart } = useShopStore()

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledMain>{children}</StyledMain>
        <StyledSidebar isOpen={isCartOpen}>
          <StyledButton onClick={toggleCart} aria-label="close shopping cart">
            <StyledCloseSquare aria-hidden="true" />
          </StyledButton>
          <ShoppingCart />
        </StyledSidebar>
      </StyledContainer>
    </>
  )
}
