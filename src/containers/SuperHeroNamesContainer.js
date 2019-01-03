import React from 'react'

class SuperHeroNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {names: ["superman", "batman", "thor", "iron man", "dr. strange", "spiderman", "aquaman"]}
  }

  render() {
    return (
      <p>
        {this.state.names[Math.floor(Math.random() * this.state.names.length)]}
      </p>
    )
  }
}

export default SuperHeroNamesContainer
