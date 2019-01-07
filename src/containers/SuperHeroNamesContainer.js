import React from 'react'
import ReactDOM from 'react-dom';

class SuperheroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"],
      randomName: "",
      newName: ""
    }
  }

  getName = event => {
    this.setState({
      randomName: this.state.names[Math.floor(Math.random() * this.state.names.length)]
    })
    console.log("generated new name from list")
  };

  handleChange = event => {
    this.setState({
      names: this.state.names,
      newName: event.target.value
    })
  }

  // handleClick = event => {
  //   event.preventDefault();
  //   console.log(`adding the name: ${this.state.newName}`)
  //   this.setState({
  //     names: this.state.names.push(this.state.newName),
  //     newName: ""
  //   })
  // }

  nameSubmit = event => {
    event.preventDefault()
    console.log(`names before the add: ${this.state.names}`)
    console.log(`adding the name: ${this.state.newName}`)
    this.setState(prevState => ({
      names: [this.state.newName, ...prevState.names],
      newName: ""
    }),function(){console.log(`New list of heroes: ${this.state.names}.`)});
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

      <div id="yo">
        <p>
          <button onClick={this.getName}>Generate Hero!</button>
        </p>

        <p>
          {/* for showing the empty this.state.randomName, which will be updated on button click */ }
          {this.state.randomName}
        </p>

        <p>
          {/* getting random name from this.state.names during each render */}
          {/* {this.state.names[Math.floor(Math.random() * this.state.names.length)]} */}
        </p>

        <div>
          <form>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.newName}/>
            <button onClick={this.nameSubmit}>Submit new hero</button>
            {/* <input type="submit" onClick={this.handleClick} value="Submit" /> */}
          </form>
        </div>
        <p>
          {/* Full list of superheroes: {this.state.names.join(", ")} */}
        </p>
      </div>

    )
  }
}

export default SuperheroNamesContainer
