import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  fetchQuestions
} from './helpers'
import Questions from './Questions'
import Background from './Background'
import SidePanel from './SidePanel'

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: []
    }

    this.fetchQuestions = this.fetchQuestions.bind(this)
  }

  componentDidMount () {
    const {
      appSettings: {
        nick,
        difficulty,
        gameStarted
      },
      history
    } = this.props

    if (!nick || !difficulty || !gameStarted) {
      history.replace('/')
      return
    }

    this.fetchQuestions()
  }

  fetchQuestions () {
    fetchQuestions(this.props.appSettings.difficulty)
      .then(questions => {
        this.setState({
          questions
        })
      })
  }

  render () {
    return (
      <div className='l-game'>
        <Background>
          <div className='c-questions'>
            <Questions
              question={'To jest przykladowe pytanie'}
              answers={['1', '2', '3', '4']}
            />
          </div>
        </Background>
        <SidePanel />
      </div>
    )
  }
}

Game.propTypes = {
  appSettings: PropTypes.object,
  history: PropTypes.object
}

export default Game
