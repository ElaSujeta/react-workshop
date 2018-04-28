import React, { Component } from 'react'
import Home from './Home'
import Setup from './Setup'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nick: '',
      difficulty: null
    }

    this.setupApp = this.setupApp.bind(this)
  }

  setupApp (nick, difficulty) {
    this.setState({
      nick,
      difficulty
    })
  }

  render () {
    return (
      <span>
        <Home
          name={this.state.nick}
        />
        <Setup
          setupApp={this.setupApp}
        />
      </span>
    )
  }
}

export default App
