import React from 'react'
import badWords from '../components/BadWords'
import SuperheroNamesContainer from './SuperheroNamesContainer'

class AddSuperhero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [{"Superman": "can fly"}, {"Batman": "has money"}, {"Thor": "is strong"}, {"Iron man": "has a big brain"}, {"Dr. Strange": "has magic"}, {"Spiderman": "can shoot webs"}, {"Aquaman": "can breathe under water"}],
      newName: "",
      newPower: "",
    }
  }

  titleCase = (name) => {
    let newName = name.split(' ')
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

  handleChangeName = event => {
    this.setState({
      names: this.state.names,
      newName: event.target.value
    })
  }

  handleChangePower = event => {
    this.setState({
      names: this.state.names,
      newPower: event.target.value
    })
  }

  nameSubmit = event => {
    event.preventDefault()
    console.log(`adding the name: ${this.state.newName}`)
    if (this.state.newName !== "" && this.checkBadWords(this.state.newName, badWords)) {
      console.log(this.state.newName)
      this.setState(prevState => ({
      names: [{[this.titleCase(this.state.newName)]: this.state.newPower}, ...prevState.names],
      newName: ""
    }),function(){console.log(`New list of heroes: ${this.state.names}.`)});
  } else {
    alert("Name cannot be blank, or contain naughty words")
  }
  }

  render() {
    return (

      <div>
        <SuperheroNamesContainer allNames = {this.state}/>
        <div>
          <form>
            <label htmlFor="name"> Enter a new Superhero!: </label>
            <input type="text" id= "name" name="name" onChange={this.handleChangeName} value={this.state.newName}/>
            <label htmlFor="power"> Enter the Superhero's power!: </label>
            <input type="text" id= "power" name="power" onChange={this.handleChangePower} value={this.state.newPower} />
            <button onClick={this.nameSubmit}>Submit new hero</button>
          </form>
        </div>
      </div>

    )
  }
}

export default AddSuperhero;
