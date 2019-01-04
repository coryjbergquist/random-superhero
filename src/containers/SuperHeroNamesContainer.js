import React from 'react'

class SuperheroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"],
      newName: ""
    }
  }

  getName = event => {
    console.log("generated new name from list")
    this.setState(this.state)
  };

  handleChange = event => {
    this.setState({
      names: this.state.names,
      newName: event.target.value
    })
  }

  handleClick = event => {
    event.preventDefault();
    console.log(`adding the name: ${this.state.newName}`)
    this.setState({
      names: this.state.names.push(this.state.newName),
      newName: ""
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("from submit")
  //   this.setState({
  //     names: this.state.names.push(event.value)
  //   });
  // }

  render() {


    return (

      <div>
        <p>
          <button onClick={this.getName}>Generate Hero!</button>
        </p>

        <p>
          {this.state.names[Math.floor(Math.random() * this.state.names.length)]}
        </p>

        <div>
          <form>
            <input type="text" name="name" onChange={this.handleChange} />
            <input type="submit" onClick={this.handleClick} value="Submit" />
          </form>
        </div>
        <p>
          Full list of superheroes: {this.state.names.join(", ")}
        </p>
      </div>

    )
  }
}

export default SuperheroNamesContainer
