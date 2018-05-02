import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  fetchQuestions
} from './helpers'
import Questions from './Questions'
import Background from './Background'
import SidePanel from './SidePanel'
import { shuffle } from 'lodash'

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      currentQuestion: {},
      answers: [],
      currentQuestionNumber: 0
    }

    this.fetchQuestions = this.fetchQuestions.bind(this)
    this.generateQuestion = this.generateQuestion.bind(this)
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
        }, this.generateQuestion)
      })
  }

  generateQuestion () {
    const currentQuestion = this.state.questions[this.state.currentQuestionNumber]
    const {
      correctAnswer,
      incorrectAnswers
    } = currentQuestion

    const answers = shuffle([correctAnswer, ...incorrectAnswers])
      .map(answer => ({
        text: answer,
        disabled: false
      }))

    this.setState({
      currentQuestion,
      answers
    })
  }

  render () {
    const {
      currentQuestion: {
        question,
        correctAnswer
      },
      answers
    } = this.state
    return (
      <div className='l-game'>
        <Background>
          <div className='c-questions'>
            <Questions
              question={question}
              answers={answers}
              correctAnswer={correctAnswer}
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
