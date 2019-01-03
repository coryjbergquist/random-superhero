import React, { Component } from 'react';
import './App.css';
import hi from './containers/SuperHeroNamesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is text
          </p>
          <p>
          {hi.names[Math.floor(Math.random() * hi.names.length)]}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
