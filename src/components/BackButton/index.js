import { useRouter } from 'next/router'
import { StyledButton, StyledChevronLeft } from './BackButton.styled'

export default function BackButton({ children, ariaLabel}) {
  const router = useRouter()

  return (
    <StyledButton onClick={() => router.back()} aria-label={ariaLabel}>
        <StyledChevronLeft data-testid="chevron-left" />
        {children}
    </StyledButton>
    )
}
