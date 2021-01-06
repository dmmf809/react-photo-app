import React from "react";

export const AddCollection = () => {
  const [colName, setColName] = useState("");

  const addCollection = () => {};

  return (
    <div>
      <h1>Add Collection</h1>
      <label>Collection Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setColName(event.target.value);
        }}
      />
      <button onClick={addCollection}>Add Collection</button>
    </div>
  );
};

export const AddPhotos = () => {
  const [collList, setCollList] = useState([]);

  return (
    <div>
      <h1>Add Photo</h1>
      <h2>Choose a Colletion to add to:</h2>
      {collList.map((val, key) => {
        return (
          <div>
            <Link to="/AddPhoto/${val.collName}">
              {" "}
              {/* NOT DONE*/}
              <h3>{val.collName}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
