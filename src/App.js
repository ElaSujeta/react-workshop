import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Setup from './Setup'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nick: '',
      difficulty: null,
      gameStarted: false
    }

    this.setupApp = this.setupApp.bind(this)
    this.setGameStarted = this.setGameStarted.bind(this)
  }

  setupApp (nick, difficulty) {
    this.setState({
      nick,
      difficulty
    })
  }

  setGameStarted () {
    this.setState({
      gameStarted: true
    })
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <Home
                setGameStarted={this.setGameStarted}
              />
            )}
          />
          <Route
            exact
            path='/setup'
            render={
              ({ history }) => (
                <Setup
                  setupApp={this.setupApp}
                  gameStarted={this.state.gameStarted}
                  history={history}
                />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
