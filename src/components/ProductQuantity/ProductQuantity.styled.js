import styled from "styled-components";
import { PlusSquare, MinusSquare } from "../Icons";

export const StyledInput = styled.input`
   background-color : transparent ;
   color: white;
`;

export const StyledPlusSquare = styled(PlusSquare)`
    color: white;
    width: 2rem;
    height: 2rem;
`;

export const StyledMinusSquare = styled(MinusSquare)`
    color: white;
    width: 2rem;
    height: 2rem;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
`;

export const StyledWrapper = styled.div`
    display: flex;
    width: fit-content;

`;