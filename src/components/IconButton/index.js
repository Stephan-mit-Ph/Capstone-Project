import { StyledButton } from './IconButton.styled.js'

export default function IconButton({ children, onClick, ariaLabel }) {
  return (
    <StyledButton onClick={onClick} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  )
}
