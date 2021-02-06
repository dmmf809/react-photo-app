import React from "react";
import {
  StyledButton,
  ButtonContainer,
  TextConatiner,
  Title,
} from "./HomeElements";

const Home = () => {
  return (
    <>
      <TextConatiner>
        <Title>
          Want to see more?
          <ButtonContainer>
            <StyledButton to="/collections">Collections</StyledButton>
          </ButtonContainer>
        </Title>
      </TextConatiner>
    </>
  );
};

export default Home;
