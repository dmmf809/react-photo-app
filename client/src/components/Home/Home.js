import React from 'react'
import { HomeContainer,
         ButtonLogin,
         ButtonGallery, } from './HomeElements'

const Home = () => {
    return (
        <HomeContainer>
            <ButtonLogin>
                Login
            </ButtonLogin>
            <ButtonGallery>
                Gallery
            </ButtonGallery>
        </HomeContainer>
    )
}

export default Home
