import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Pages/Home'
import Footer from './Components/Footer/Footer.js'



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
