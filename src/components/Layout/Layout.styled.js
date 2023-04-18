import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledMain = styled.main`
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 20px;
  min-height: 100%;

  @media screen and (min-width: 375px) {
    padding: 0px;
    padding-top: 15px;
  }

  @media screen and (min-width: 414px) {
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`