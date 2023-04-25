import styled from 'styled-components'
import Image from 'next/image'

export const StyledHeroWrapper = styled.div`
  position: relative;
  height: 12rem;
  width: 100%;
  top: 0rem;
  right: 0px;
  overflow: hidden;
  margin: 0;
  padding: 0px;

  @media (min-width: 768px) {
    height: 25rem;
  }

 

  

  /* @media (max-width: 568px) {
    width: 366px;
    height: 129px;
  }

  @media (min-width: 568px) {
    width: 568px;
    height: 200px;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 400px;
  } */

`;

export const StyledHeroImage = styled(Image)`
  max-width: 100%;
  background-repeat: no-repeat;
  align-self: center;
`;
