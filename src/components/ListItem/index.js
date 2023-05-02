import { StyledListItem } from './ListItem.styled'

export default function ListItem({ key, role, children }) {
  return (
    <StyledListItem key={key} role={role}>
      {children}
    </StyledListItem>
  )
}
