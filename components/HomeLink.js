import styled from "styled-components";
import Link from "next/link";
import ChevronLeft from '/components/Icons/ChevronLeft';

const StyledLink = styled.a`
    display: flex;
    padding-top: 10%;
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
