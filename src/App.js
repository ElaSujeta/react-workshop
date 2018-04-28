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
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/setup'
            render={
              () =>
                <Setup
                  setupApp={this.setupApp}
                />
              }
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
