import styled from 'styled-components'
import Image from 'next/image'


export const StyledAbout = styled.p`
  font: var(--font-body-large);
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
export const StyledTitle = styled.h1`
  font: var(--font-title);
  text-align: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;

  @media (max-width: 568px) {
    padding-bottom: 1rem;
  }
`

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`
