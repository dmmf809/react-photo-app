import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { GlobalStyles } from './globalStyles'
import { HomeContainer } from './components/Home/HomeElements'

function App() {
  return (
    <Router>
      <GlobalStyles />
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
