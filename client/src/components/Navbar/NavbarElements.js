import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 80px;
    display: flex;
    align-items: center;
    font-weight: 700;
`;

export const StyledTitle = styled.h1`
    margin-left: 35px;
    color: #47bcc9;
    font-family: 'Lobster', cursive;
    font-size: 2rem;

`

export const NavLink = styled(Link)`
    display: block;
    position: absolute;
    font-size: 1.5rem;
    top: 18px;
    right: 35px;
    cursor: pointer;
    color: #ffff;
    text-decoration: none!important;

    &:hover {
        color: #0F2027;
    }
`;
