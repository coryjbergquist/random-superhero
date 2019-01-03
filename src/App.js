import React, { Component } from 'react';
import './App.css';
import SuperHeroNamesContainer from './containers/SuperHeroNamesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
          <SuperHeroNamesContainer />
        </p>
          <p>
            This is text
          </p>
        </header>
      </div>
    );
  }
}

export default App;
