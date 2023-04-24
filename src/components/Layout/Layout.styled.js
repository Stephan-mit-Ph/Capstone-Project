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
  width: min-content(90%, 1140px);
  background-color: #262626;
  margin-inline: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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