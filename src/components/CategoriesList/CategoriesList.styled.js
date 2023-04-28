import styled from 'styled-components'
import Image from 'next/image'
import SvgChevronRight from '../Icons/ChevronRight'

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-bottom: 5rem;
  gap: 2rem;
`
export const StyledCardTitle = styled.h2`
  font: var(--font-card-title);
`

export const StyledCard = styled.article`
  flex: 1 1 300px;
  max-width: 330px;
  margin: 1.25rem 1.25rem 1.25rem 1.25rem;
  gap: 0.5rem;
  background-color: var(--bg-color-400);
  padding: 2.25rem;
  border-radius: 15px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
`

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const StyledChevronRight = styled(SvgChevronRight)`
  fill: currentColor;
  font-size: 1rem;

`

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const StyledChevronWrapper = styled.div`
  display: flex;
  font: var(--font-body-medium);
  justify-content: flex-end;
  align-items: flex-start;
  align-self: auto;
`
