import React from 'react'

import PropTypes from 'prop-types'

const Button = ({
  children,
  type = 'button',
  version = 'primary',
  isDisabled = false,
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

// Button - Support for defaultProps is removed use Javascript default parameter instead //
// Button.defaultProps = {
//   version: 'primary',
//   type: 'button',
//   isDisabled: false,
// }

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
