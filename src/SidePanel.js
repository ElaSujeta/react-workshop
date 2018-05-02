import React from 'react'
import QuestionsList from './QuestionsList'
import LifeLines from './LifeLines'
import PropTypes from 'prop-types'

class SidePanel extends React.Component {
  render () {
    const {
      currentQuestionNumber
    } = this.props

    return (
      <div className='c-side'>
        <LifeLines />
        <QuestionsList
          currentQuestionNumber={currentQuestionNumber}
        />
      </div>
    )
  }
}

SidePanel.propTypes = {
  currentQuestionNumber: PropTypes.number
}

export default SidePanel
