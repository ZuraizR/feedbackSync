import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const Header = ({
  text = 'FeedbackSync',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ccc',
}) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 title='Home Page'>{text}</h1>
        </Link>
      </div>
    </header>
  )
}

// Header - Support for defaultProps is removed use Javascript default parameter instead //
// Header.defaultProps = {
//   text: 'FeedbackSync',
//   bgColor: 'rgba(0,0,0,0.4)',
//   textColor: '#ccc',
// }

Header.protoTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
