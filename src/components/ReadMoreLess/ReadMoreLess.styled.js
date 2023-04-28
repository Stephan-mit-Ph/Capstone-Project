import styled from 'styled-components'

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  font: var(--font-body-medium);
`

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font: var(--font-body-medium-bold);
  color: var(--text-color);
  cursor: pointer;#

  :active {
    color: var(--secondary-color-600);
  }
  
  @media (min-width: 768px) {
  :hover {
    color: var(--secondary-color-600);
    transition: 1s ease-in-out;
  }

  
}
`
