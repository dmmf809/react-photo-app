import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
    background: linear-gradient(90deg, rgba(196,196,247,1) 0%, rgba(73,196,221,1) 100%);
    background-size: cover;
`
//background: linear-gradient(90deg, rgba(196,196,247,1) 0%, rgba(73,196,221,1) 100%);

export const Image = styled.img`
    height: 90vh;
`

export const ButtonContainer = styled.div`
    position: relative;
`

export const StyledButton = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    margin-top:-375px;
    margin-left:-80px;
    z-index: 1000;
    padding: 10px;
    width: 150px;
    background-color:#2C5364 ;
    font-size: 16px;
    border-radius: 10px;
    color: white;
    text-align: center;
    transition: ease-in-out 0.3s;
    text-decoration: none!important;

    &:hover {
        background-color: #47bcc9;
        color: black;
        cursor: pointer
    }
`