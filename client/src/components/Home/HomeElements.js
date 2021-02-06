import styled from "styled-components";
import { Link } from "react-router-dom";
import Slide1 from "../../Images/lakelouise.jpg";

//background: linear-gradient(90deg, rgba(196,196,247,1) 0%, rgba(73,196,221,1) 100%);

export const Image = styled.div`
  background-image: url(${Slide1});
  height: 89.6vh;
  filter: blur(2px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const StyledButton = styled(Link)`
  z-index: 1000;
  padding: 10px;
  width: 150px;
  background-color: #2c5364;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  text-align: center;
  transition: ease-in-out 0.3s;
  text-decoration: none !important;

  &:hover {
    background-color: #47bcc9;
    color: black;
    cursor: pointer;
  }
`;

export const TextConatiner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Title = styled.h1`
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
color: white;
border: 3px solid #f1f1f1;
width: 80%;
padding: 20px;
text-align: center;
`