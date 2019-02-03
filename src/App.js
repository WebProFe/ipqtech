import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/Navigation/NavMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Pages/Home'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavMenu />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
    );
  }
}

export default App;
