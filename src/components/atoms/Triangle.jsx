import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

export default function Triangle({
  color = colors.main,
  size = dimensions.figure.base,
}) {
  return (
    <svg width={size} height={size}>
      <polygon
        points={`0 ${size}, ${size / 2} 0,${size} ${size}`}
        fill={color}
      />
    </svg>
  )
}

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
