import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Login, User } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/user" component={User} />
        </Router>
      </div>
    );
  }
}

export default App;
