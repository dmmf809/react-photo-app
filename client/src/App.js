import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./globalStyles";
import { HomeContainer } from "./components/Home/HomeElements";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <HomeContainer>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HomeContainer>
    </Router>
  );
}

export default App;
