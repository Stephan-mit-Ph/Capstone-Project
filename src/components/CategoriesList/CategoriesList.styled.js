import styled from 'styled-components'
import Image from 'next/image'
import SvgChevronRight from '../Icons/ChevronRight';

export const StyledList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 2rem;
`
export const StyledCardTitle = styled.h3`
  font: var(--font-card-title);
`;

export const StyledCard = styled.article`
  flex: 1 1 300px;
  margin: 20px;
  gap: 0.5rem;
  background-color: var(--bg-color-400);
  padding: 2.25rem;
  border-radius: 15px;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

export const StyledChevron = styled(SvgChevronRight)`
  fill: currentColor;
  color: var(--text-color);
  font-size: 1.2rem;
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;