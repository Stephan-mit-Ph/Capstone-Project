import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const StyledHeroWrapper = styled.div`
  position: relative;
  height: 10rem;
  width: 100%;
  top: 0rem;
  right: 0px;
  overflow: hidden;
  margin: 0;
  padding: 0px;

  @media (min-width: 768px) {
    height: 25rem;
  }
`

export const StyledHeroImage = styled(Image)`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  align-self: center;
`

export const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 6px 12px;
  transition: color 0.1s ease-in-out;
  font: var(--font-body-medium);

  @media (min-width: 768px) {
    font: var(--font-body-large);
    padding: 8px 16px;
    border-radius: 10px;
  }
  @media (min-width: 524px) {
    &:hover {
      color: var(--secondary-color-700, 0.2);
      border: 1px solid var(--secondary-color-700);
      transition: color 0.1s ease-in-out, border 0.1s ease-in-out;
    }
  }

  &:active {
    color: var(--secondary-color-400);
    border: 1px solid var(--secondary-color-400);
    transition: color 0.1s ease-in-out, border 0.1s ease-in-out;
  }
`

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
