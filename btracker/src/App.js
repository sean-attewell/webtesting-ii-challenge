import React, { Component } from 'react';

import './App.css';
import Display from './Display/Display.js'
import Dashboard from './Dashboard/Dashboard.js'

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  }

  resetScores = () => {
    this.setState({ balls: 0, strikes: 0})
  }

  ball = () => {
    if (this.state.balls < 3) {
      const oneMoreBall = this.state.balls + 1
      this.setState({balls: oneMoreBall})
    } else {
      this.resetScores();
    }
  }

  strike = () => {
    if (this.state.strikes < 2) {
      const oneMoreStrike = this.state.strikes + 1
      this.setState({strikes: oneMoreStrike})
    } else {
      this.resetScores();
    }
  }

  hit = () => {
    this.resetScores()
  }

  foul = () => {
    if (this.state.strikes < 2) {
      const oneMoreStrike = this.state.strikes + 1
      this.setState({strikes: oneMoreStrike})
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Hello Baseball Fans!</h2>
        <Display 
          balls={this.state.balls}
          strikes={this.state.strikes}
        />
        <Dashboard 
          ball={this.ball}
          strike={this.strike}
          hit={this.hit}
          foul={this.foul}
        />
      </div>
    );
  }
}

export default App;
