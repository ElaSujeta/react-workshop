import React from 'react'
import PropTypes from 'prop-types'
import {
  getGuaranteedReward
} from './helpers'

const EndScreen = props => {
  const {
    hasWon,
    currentQuestionNumber
  } = props
  const reward = hasWon
    ? 1000000
    : getGuaranteedReward(currentQuestionNumber)

  return (
    <div className='l-end'>
      <p>
        You won {reward} $
      </p>
    </div>
  )
}

EndScreen.propTypes = {
  hasWon: PropTypes.bool,
  currentQuestionNumber: PropTypes.number
}

export default EndScreen
