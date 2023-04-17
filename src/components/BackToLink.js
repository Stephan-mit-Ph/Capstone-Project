import styled from 'styled-components'
import ChevronLeft from './Icons/ChevronLeft'

const StyledLink = styled.a`
  display: flex;
  align-items: center;
`

export default function BackToLink({ children, href }) {
  return (
    <StyledLink href={href}>
      <ChevronLeft />
      {children}
    </StyledLink>
  )
}
