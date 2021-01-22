import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonColl = styled.button`
  &:hover {
    background-color: blue;
    color: white;
  }
`;

/*
export const ButtonGallery = ({
  // if no onclick parameter is passed to ButtonGallery, then by default, it will just go the the link
  onClick, // we passed an onclick to ButtonGallery (alert), so it will show alert then go to the link
  children, // children is the button name in Gallery.js
  buttonSize,
  buttonStyle,
}) => {
  return (
    // this button has 3 classnames: btn, buttonStyle passed and buttonSize passed, all 3 will be appiled to the button
    <button className={`btn ${buttonStyle} ${buttonSize}`} onClick={onClick}>
      {children}
    </button>
  );
};
*/
