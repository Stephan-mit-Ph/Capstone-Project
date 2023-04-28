import styled from 'styled-components'
import { PlusSquare, MinusSquare } from '../Icons'

export const StyledInput = styled.input`
  background-color: transparent;
  color: var(--text-color);
  margin: 0.5rem;
`

export const StyledPlusSquare = styled(PlusSquare)`
  color: var(--text-color);
  width: 2rem;
  height: 2rem;
`

export const StyledMinusSquare = styled(MinusSquare)`
  color: var(--text-color);
  width: 2rem;
  height: 2rem;
`

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`

export const StyledWrapper = styled.div`
  display: flex;
  width: fit-content;
`
export const StyledPrice = styled.p`
    font: var(--font-body-large);
`;

