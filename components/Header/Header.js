import Link from 'next/link';
import CartIcon from '../Icons/CartIcon';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 100;
    padding-left: 2rem;
    background-color: #f7f7f7;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledLink href={"/"} aira-label="Link to Homepage">
            SEC:Tech
            </StyledLink>
            <CartIcon />
        </StyledHeader>
    );
}
