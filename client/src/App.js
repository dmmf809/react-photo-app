import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { GlobalStyles } from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
      

  );
}

export default App;
