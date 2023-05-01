import { useRouter } from 'next/router'
import { StyledButton, StyledChevronLeft } from './BackButton.styled'

export default function BackButton({ text, ariaLabel, icon }) {
  const router = useRouter()

  return (
    <StyledButton onClick={() => router.back()} aria-label={ariaLabel}>
        <StyledChevronLeft data-testid="chevron-left" />
        {text}
    </StyledButton>
    )
}
