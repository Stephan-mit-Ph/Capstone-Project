import styled from 'styled-components'

export const StyledHeroWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 1000px;
  position: relative;
  top: 0rem;
  right: 0px;
  overflow: hidden;
  background-color: lightgrey;
  margin: 0;
  padding: 0px;


  @media screen and (max-width: 768px) {
    height: 300px;
    width: 100%;
    
  }
  @media screen and (max-width: 567px) {
    height: 200px;
    width: 100%;

    }
`;
