import styled from "styled-components";
import Header from "./Header/Header";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    `;

const StyledMain = styled.main`
  padding: 2rem;
  display: flex;
  width: 80%;
  flex-direction: column;
  position: relative;
  top: 3rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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