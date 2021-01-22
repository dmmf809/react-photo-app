import React from "react";
import { ButtonAdmin } from "./MainElements";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>ADMIN</h1>
      <Link to="/AddCollection">
        <ButtonAdmin>Add Collection</ButtonAdmin>
      </Link>
      <br />
      <Link to="/AddPhotos">
        <ButtonAdmin>Add Photos</ButtonAdmin>
      </Link>
      <br />
    </>
  );
};

export default Main;
