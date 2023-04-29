import { StyledContainer, StyledMain, StyledButton, StyledSidebar, StyledCloseSquare, StyledSquareButton } from './Layout.styled.js'
import Header from '../Header'
import { useState } from 'react'
import { StyledBadge, StyledShopIcon } from '../Header/Header.styled.js'
import ShoppingCart from '../ShoppingCart/index.js'

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <StyledContainer>
      <Header>
        <StyledButton onClick={handleToggleSidebar} aria-label="open shopping cart">
          {isSidebarOpen ? (
            <>
              <StyledBadge /> <StyledShopIcon />
            </>
          ) : (
            <>
              <StyledBadge /> <StyledShopIcon />
            </>
          )}{' '}
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
