import React from 'react'
import { ButtonGroup,
         HomeContainer,
         HomeItems,
         StyledButton,
         StyledTitle, } from './HomeElements'

const Home = () => {

    return (
      <>
          <HomeItems>
            <StyledTitle>Photo App</StyledTitle>
            <ButtonGroup>
              <StyledButton to="/login">
                Login
              </StyledButton>
              <StyledButton to="/gallery">
                Gallery
              </StyledButton>
            </ButtonGroup>
          </HomeItems>

      </>
    );
}

export default Home