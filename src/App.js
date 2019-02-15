import React, { Component } from 'react';
import './App.css';
import NavMenu from './Components/Navigation/NavMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavMenu />
        <Home />
        {/* <Route exact path="/" component={Home} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
