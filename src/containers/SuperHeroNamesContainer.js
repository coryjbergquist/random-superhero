import React from 'react'

class SuperheroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"], randomName: ""}
  }

  showName = event => {
    console.log("hi")
    this.setState({names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"]})
  };

  render() {


    return (

      <div>
      <p>
        <button onClick={this.showName}>Generate Hero!</button>
      </p>

        <p>
          {this.state.names[Math.floor(Math.random() * this.state.names.length)]}
        </p>

      </div>

    )
  }
}

export default SuperheroNamesContainer
