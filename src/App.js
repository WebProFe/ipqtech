import React, { Component } from 'react';
import './App.css';
import NavMenu from './Components/Navigation/NavMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavMenu />
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
      </div>
    </Router>
    );
  }
}

export default App;
