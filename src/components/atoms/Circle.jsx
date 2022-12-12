import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

export default function Circle({
  color = colors.main,
  size = dimensions.figure.base,
}) {
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
