import React, { Component } from 'react';
import './App.css';
import SuperheroNamesContainer from './containers/SuperheroNamesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pick your superhero for today!
          </p>

          <p>
            <SuperheroNamesContainer />
          </p>

        </header>
      </div>
    );
  }
}

export default App;
