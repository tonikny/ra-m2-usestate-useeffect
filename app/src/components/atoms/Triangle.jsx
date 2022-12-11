import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

export default function Triangle({
  color = colors.main,
  size = dimensions.figure.base,
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
        clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
      }}
    />
  )
}

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
