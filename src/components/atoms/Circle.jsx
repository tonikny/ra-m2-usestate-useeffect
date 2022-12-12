import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

export default function Circle({
  color = colors.main,
  size = dimensions.figure.base,
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: '50%',
      }}
    />
  )
}

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
