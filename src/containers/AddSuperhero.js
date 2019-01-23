import React from 'react'
import badWords from '../components/BadWords'
import SuperheroNamesContainer from './SuperheroNamesContainer'

class AddSuperhero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"],
      randomName: "",
      newName: ""
    }
  }

  titleCase = (str) => {
    let newName = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')
   return newName;
  }

  checkBadWords = (name, badWords) => {
    let array = name.toLowerCase().split(" ")
    if ( array.some(function(word) {return badWords.includes(word)}) ) {
      return false
    } else {
      return true
    }
  }

  handleChange = event => {
    this.setState({
      names: this.state.names,
      newName: event.target.value
    })
  }

  nameSubmit = event => {
    event.preventDefault()
    console.log(`adding the name: ${this.state.newName}`)
    if (this.state.newName !== "" && this.checkBadWords(this.state.newName, badWords)) {
      this.setState(prevState => ({
      names: [this.titleCase(this.state.newName), ...prevState.names],
      newName: ""
    }),function(){console.log(`New list of heroes: ${this.state.names}.`)});
  } else {
    alert("Name cannot be blank, or contain naughty words")
  }
  }

  render() {
    return (

      <div>
        <SuperheroNamesContainer allNames = {this.state.names}/>
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

export default AddSuperhero;
