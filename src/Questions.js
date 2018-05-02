import React from 'react'
import PropTypes from 'prop-types'

class Questions extends React.Component {
  constructor (props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem (item, index) {
    return (
      <li
        key={`${index}-answer`}
        className='c-question'
      >
        <span className='c-question__label'>
          {String.fromCharCode(65 + index)}: {item.text}
        </span>
      </li>
    )
  }

  render () {
    const {
      answers,
      question
    } = this.props

    return (
      <div className='c-questions'>
        <p className='c-questions__title c-question'>
          {question}
        </p>
        <ul className='c-questions__list'>
          {answers.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

Questions.propTypes = {
  answers: PropTypes.array,
  question: PropTypes.string,
  answer: PropTypes.object,
  setCurrentAnswer: PropTypes.func,
  isWaitingForNextQuestion: PropTypes.bool,
  isWaitingForApproval: PropTypes.bool,
  correctAnswer: PropTypes.string
}

export default Questions
