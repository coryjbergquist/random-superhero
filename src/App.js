import React, { Component } from 'react';
import './App.css';
import AddSuperhero from './containers/AddSuperhero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

            Pick your superhero for today!

          <div>
            <AddSuperhero />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
