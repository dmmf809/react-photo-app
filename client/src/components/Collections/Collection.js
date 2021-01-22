import React from "react";
import { ButtonColl } from "./CollectionElements";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const Collection = () => {
  /*
  const alertClicked = () => {
    alert("You clicked a ListGroupItem");
  };
*/

  // declare the collList and set to empty
  const [collList, setCollList] = useState([]); // list that would contain collections to choose from

  // populate the collList from the database server
  Axios.get("http://localgost:3001/collections").then((response) => {
    setCollList(response.data); // assigns the sql collections to the collList
  });

  return (
    <>
      <h1>COLLECTIONS</h1>
      {collList.map((val, key) => {
        return (
          <ButtonColl>
            <Link to={`/collection/${val.name}`}>
              <h3> {val.name}</h3>
            </Link>
          </ButtonColl>
        );
      })}
    </>
  );
};

/*      
<Link to="/first">
<ButtonGallery
  onClick={alertClicked}
  buttonStyle="btn-outline" // the style and size will be applied to the button
  buttonSize="btn-large"
>
  FirstLink
</ButtonGallery>
</Link>
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
*/
export default Collection;
