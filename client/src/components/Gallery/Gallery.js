import React from "react";
import { ButtonGallery } from "./GalleryElements";

const Gallery = () => {
  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  return (
    <>
      <h1>GALLERY</h1>
      <ButtonGallery to="/" onClick={alertClicked}>
        FirstLink
      </ButtonGallery>
      <br />
      <ButtonGallery to="/" onClick={alertClicked}>
        SecondLink
      </ButtonGallery>
      <br />
      <ButtonGallery to="/" onClick={alertClicked}>
        ThirdLink
      </ButtonGallery>
      <br />
    </>
  );
};

export default Gallery;
