import styled from 'styled-components'
import Image from 'next/image'

export const StyledHeroWrapper = styled.div`
  position: relative;
  height: 8rem;
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
  object-fit: cover;
  align-self: center;
`
