import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link
            to='/'
            title='Click to go back home'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '5px',
            }}
          >
            <FaArrowAltCircleLeft />
            Back to Home
          </Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
