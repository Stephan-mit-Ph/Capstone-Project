import { StyledContainer, StyledMain } from './Layout.styled.js'
import Header from '../Header'

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  )
}
