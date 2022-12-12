import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

export default function Square({
  color = colors.main,
  size = dimensions.figure.base,
}) {
  return (
    <svg width={size} height={size}>
      <rect width={size} height={size} fill={color} />
    </svg>
  )
}

Square.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
