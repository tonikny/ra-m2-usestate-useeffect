import React from 'react'
import PropTypes from 'prop-types'

export default function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} style={{ margin: '3px 6px' }}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
}
