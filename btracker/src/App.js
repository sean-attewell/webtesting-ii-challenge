import React, { Component } from 'react';

import './App.css';
import Display from './Display/Display.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Display />
      </div>
    );
  }
}

export default App;
