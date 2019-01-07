import React from 'react'
import badWords from '../components/BadWords'

class SuperheroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"],
      randomName: "",
      newName: ""
    }
  }

  handleChange = event => {
    this.setState({
      names: this.state.names,
      newName: event.target.value
    })
  }

  getName = event => {
    this.setState({
      randomName: this.state.names[Math.floor(Math.random() * this.state.names.length)]
    })
    console.log("generated new name from list")
  };

  nameSubmit = event => {
    event.preventDefault()
    console.log(`names before the add: ${this.state.names}`)
    console.log(`adding the name: ${this.state.newName}`)
    if (this.state.newName !== "" && badWords.includes(this.state.newName) === false) {
      this.setState(prevState => ({
      names: [this.state.newName, ...prevState.names],
      newName: ""
    }),function(){console.log(`New list of heroes: ${this.state.names}.`)});
  } else {
    alert("Name cannot be blank, or contain naughty words")
  }
  }

  render() {
    return (

      <div>
        <p>
          <button onClick={this.getName}>Generate Hero!</button>
        </p>
        <p>
          {/* for showing the empty this.state.randomName, which will be updated on button click */ }
          {this.state.randomName}
        </p>

        <div>
          <form>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.newName}/>
            <button onClick={this.nameSubmit}>Submit new hero</button>
          </form>
        </div>
      </div>

    )
  }
}

export default SuperheroNamesContainer;
