import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

export default function Square({
  color = colors.main,
  size = dimensions.figure.base,
}) {
  // console.log('square', color, size)
  return (
    <div
      style={{
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
      }}
    />
  )
}

Square.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
