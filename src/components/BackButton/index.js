import { useRouter } from 'next/router'
import { StyledButton, StyledChevronLeft } from './BackButton.styled'

export default function BackButton({ text, ariaLabel }) {
  const router = useRouter()

  return (
    <StyledButton onClick={() => router.back()} aria-label={ariaLabel}>
      <StyledChevronLeft />
      {text}
    </StyledButton>
  )
}
