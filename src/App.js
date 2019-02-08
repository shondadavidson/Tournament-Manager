import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TournamentManager from './components/TournamentManager';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TournamentManager />
      </div>
    );
  }
}


export default App;
