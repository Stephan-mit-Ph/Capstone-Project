import styled from 'styled-components'
import CloseSquare from '../Icons/Close'

export const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
`

export const StyledMain = styled.main`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  overflow-y: auto;
`

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  width: 300px;
  overflow: auto;
  background-color: var(--bg-color-500);
  border-left: 1px solid var(--bg-color-400);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`
export const StyledButton = styled.button`
  display: flex;
  background: none;
  border: none;
  width: fit-content;
`

export const StyledCloseSquare = styled(CloseSquare)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-color);
`
export const StyledSquareButton = styled.button`
  display: flex;
  background: none;
  border: none;
  width: fit-content;
  position: absolute;
  top: 1rem;
  left: 1rem;
`
