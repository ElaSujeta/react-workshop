import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
  return (
    <div className='l-centered'>
      <p>
        Hello {props.name}!
      </p>
      <button
        className='c-start-link'
      >
        Start
      </button>
    </div>
  )
}

Home.defaultProps = {
  name: 'Default name'
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home
