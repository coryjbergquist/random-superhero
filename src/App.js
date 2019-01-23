import React, { Component } from 'react';
import './App.css';
import SuperheroNamesContainer from './containers/SuperheroNamesContainer'
import AddSuperhero from './containers/AddSuperhero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pick your superhero for today!
          </p>

          <div>
            <AddSuperhero />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
