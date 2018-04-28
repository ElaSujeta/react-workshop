import React from 'react'
import {
  Link
} from 'react-router-dom'

const Home = props => {
  return (
    <div className='l-centered'>
      <Link
        className='c-start-link'
        to='/setup'
      >
        Start
      </Link>
    </div>
  )
}

export default Home
