import React from 'react'
import PropTypes from 'prop-types'

export default function InputNumber({
  id,
  name,
  size,
  onSizeChange = () => {},
}) {
  return (
    <input
      id={`${id}-size`}
      name={name}
      type="number"
      value={size}
      min="1"
      max="512"
      style={{ width: '4em' }}
      onChange={onSizeChange}
    />
  )
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onSizeChange: PropTypes.func,
}
