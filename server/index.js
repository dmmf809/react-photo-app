const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "p@szW0rd!248",
  database: "photoapp",
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

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
      } else if(result.length > 0){
        res.send(result);
      } else {
        res.send()
      }
    }
  );
});
