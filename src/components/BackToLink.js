import styled from "styled-components";
import ChevronLeft from './Icons/ChevronLeft';

const StyledLink = styled.a`
    display: flex;
    align-items: center;
`;


export default function BackToLink() {
    return (
        <>
        <StyledLink href="./" aria-label="back to link">
            <ChevronLeft />
            back to
        </StyledLink>
        </>
    );
}
