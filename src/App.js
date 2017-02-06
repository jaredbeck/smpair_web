import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import PlayersTable from './PlayersTable';

// derp
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <PlayersTable />
        <AppFooter />
      </div>
    );
  }
}

export default App;
