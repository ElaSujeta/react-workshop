import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import LifeLines from './LifeLines'

class SidePanel extends Component {
  render () {
    return (
      <div className='c-side'>
        Side panel
        <LifeLines />
        <QuestionsList />
      </div>
    )
  }
}

export default SidePanel
