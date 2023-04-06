import styled from "styled-components";
import Link from "next/link";
import ChevronLeft from '/components/Icons/ChevronLeft';

const StyledLink = styled.a`
    display: flex;
`;


export default function HomeLink() {
    return (
        <>
        <StyledLink href="/">
            <ChevronLeft />
            Home
        </StyledLink>
        </>
    );
}
