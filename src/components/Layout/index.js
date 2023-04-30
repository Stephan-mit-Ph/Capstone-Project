import { useState } from 'react'
import { useShopStore } from '../../store'
import Header from '../Header'
import { StyledBadge, StyledShopIcon } from '../Header/Header.styled.js'
import ShoppingCart from '../ShoppingCart/index.js'
import { StyledCloseSquare, StyledContainer, StyledMain, StyledSidebar } from './Layout.styled.js'
import IconButton from '../IconButton/index'

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const cart = useShopStore((state) => state.cart)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <StyledContainer>
      <Header>
        <IconButton onClick={handleToggleSidebar} aria-label="open shopping cart">
          {cart.length > 0 && <StyledBadge />}
          <StyledShopIcon />
        </IconButton>
      </Header>
      <StyledMain>{children}</StyledMain>
      <StyledSidebar isOpen={isSidebarOpen}>
        <IconButton onClick={handleToggleSidebar} aria-label="close shopping cart">
          <StyledCloseSquare />
        </IconButton>
        <ShoppingCart />
      </StyledSidebar>
    </StyledContainer>
  )
}
