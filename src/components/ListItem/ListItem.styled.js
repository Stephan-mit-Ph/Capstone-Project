import styled from 'styled-components'

export const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex: 1 1 330px;
  width: 100%;
  max-width: 330px;
  margin: 1.25rem 1.25rem 1.25rem 1.25rem;
  gap: 0.5rem;
  background-color: var(--bg-color-400);
  padding: 2.25rem;
  border-radius: 15px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    max-width: 380px;
  }
`
