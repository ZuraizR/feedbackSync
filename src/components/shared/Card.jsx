import React from 'react'

import PropTypes from 'prop-types'

const Card = ({ children, reverse }) => {
  // Conditional className
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

// function Card({ children, reverse }) {
//   // Conditional Styling
//   return (
//     <div
//       className='card'
//       style={{
//         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
//         color: reverse ? '#fff' : '#000',
//       }}
//     >
//       {children}
//     </div>
//   )
// }

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
