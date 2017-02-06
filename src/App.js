import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import PlayerList from './PlayerList';

// derp
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <PlayerList />
        <AppFooter />
      </div>
    );
  }
}

export default App;
