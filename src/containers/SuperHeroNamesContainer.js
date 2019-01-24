import React from 'react'

class SuperheroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomName: {"": ""},
    }
  }

  getName = event => {
    this.setState({
      randomName: this.props.allNames.names[Math.floor(Math.random() * this.props.allNames.names.length)]
    }, function () {console.log("generated new name from list")})
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
          {/* this shows the empty this.state.randomName, which will be updated on button click */ }
          {Object.keys(this.state.randomName)}
        </p>
        <p>
          Your powers will be:
        </p>
        <p>
          {Object.values(this.state.randomName)}
        </p>

      </div>

    )
  }
}

export default SuperheroNamesContainer;
