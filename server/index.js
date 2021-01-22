const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "photoapp",
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

//QUERIES

// Login //////////////////////////////////////////////////////

//Login with the right credentials
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Collections //////////////////////////////////////////////

// get all collections
app.get("/collections", (req, res) => {
  db.query("SELECT * FROM collection", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// get specific collection
app.get("collections/:name", (req, res) => {
  const name = req.params.name; // the given name on the url

  db.query(
    "SELECT * FROM collections WHERE collection_name = ?",
    [name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
