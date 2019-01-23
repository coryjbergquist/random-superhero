import React from 'react'
import badWords from '../components/BadWords'

class SuperheroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: this.props.allNames,
      randomName: "",
    }
  }


  getName = event => {
    this.setState({
      randomName: this.state.names[Math.floor(Math.random() * this.state.names.length)]
    })
    console.log("generated new name from list")
  };



  render() {
    return (

      <div>
        <p>
          <button onClick={this.getName}>Generate Hero!</button>
        </p>
        <p>
          This is your hero for the day:
        </p>
        <p>
          {/* for showing the empty this.state.randomName, which will be updated on button click */ }
          {this.state.randomName}
        </p>

      </div>

    )
  }
}

export default SuperheroNamesContainer;
