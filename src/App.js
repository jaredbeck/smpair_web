import React from 'react';
import './App.css';
import AlphaWarning from './AlphaWarning';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import PlayerList from './PlayerList';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AlphaWarning />
        <PlayerList />
        <AppFooter />
      </div>
    );
  }
}

export default App;
