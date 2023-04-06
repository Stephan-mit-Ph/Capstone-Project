import styled from "styled-components";
import Header from "./Header/Header";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    `;

const StyledMain = styled.main`
  display: flex;
  width: 80%;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
  padding: 20px;
  align-items: center;
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
  `;


  export default function Layout({ children }) {
    return (
      <>
        <StyledContainer>
        <Header />
        <StyledMain>{children}</StyledMain>
        </StyledContainer>
        </>
    );
  }