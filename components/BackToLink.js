import styled from "styled-components";
import ChevronLeft from '/components/Icons/ChevronLeft';

const StyledLink = styled.a`
    display: flex;
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
