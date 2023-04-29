import { useState } from 'react'
import { useShopStore } from '../../store'
import Header from '../Header'
import { StyledBadge, StyledShopIcon } from '../Header/Header.styled.js'
import ShoppingCart from '../ShoppingCart/index.js'
import { StyledButton, StyledCloseSquare, StyledContainer, StyledMain, StyledSidebar, StyledSquareButton } from './Layout.styled.js'

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const cart = useShopStore((state) => state.cart)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <StyledContainer>
      <Header>
        <StyledButton onClick={handleToggleSidebar} aria-label="open shopping cart">
          {cart.length > 0 && <StyledBadge />}
          <StyledShopIcon />
        </StyledButton>
      </Header>
      <StyledMain>{children}</StyledMain>
      <StyledSidebar isOpen={isSidebarOpen}>
        <StyledSquareButton onClick={handleToggleSidebar} aria-label="close shopping cart">
          <StyledCloseSquare />
        </StyledSquareButton>
        <ShoppingCart />
      </StyledSidebar>
    </StyledContainer>
  )
}
