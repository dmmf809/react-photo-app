import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
    background: linear-gradient(90deg, rgba(196,196,247,1) 0%, rgba(73,196,221,1) 100%);
    background-size: cover;
`

export const HomeItems = styled.div`
    height: 100vh;
    max-height: 100%;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: clamp(1rem, 7vw, 5rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
`

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid white;
    border-radius: 25px;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
`