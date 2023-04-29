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
        <StyledButton onClick={handleToggleSidebar}>
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
        <StyledSquareButton onClick={handleToggleSidebar}>
          <StyledCloseSquare />
        </StyledSquareButton>
        <ShoppingCart />
      </StyledSidebar>
    </StyledContainer>
  )
}

{
  /* <CartLink href="/cart" aria-label="go to Shopping Cart">
            {cart.length > 0 && <StyledBadge />}
            <StyledShopIcon aria-hidden="true" />
          </CartLink> */
}
