import React from 'react'
import PropTypes from 'prop-types'
import { Square, Triangle, Circle } from '../atoms'
import { colors, dimensions } from '../../styles'
import InputNumber from '../atoms/InputNumber'
import Label from '../atoms/Label'
import ColorSelector from '../atoms/ColorSelector'

export default function FigureControl({
  id,
  figure,
  size = dimensions.figure.base,
  color = colors.main,
  onSizeChange,
  handleClick,
  handleChange,
  handleClose,
  displayColorPicker,
}) {
  return (
    <div style={{ margin: '50px 20px' }}>
      <div>
        <Label htmlFor={`${id}-size`}>{figure} size</Label>
        <InputNumber
          id={`${id}-size`}
          name="size"
          size={size}
          onSizeChange={onSizeChange}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Label htmlFor={`${id}-color`}>{figure} color</Label>
        <ColorSelector
          id={`${id}-color`}
          color={color}
          handleClick={handleClick}
          handleClose={handleClose}
          handleChange={handleChange}
          displayColorPicker={displayColorPicker}
        />
      </div>
      {figure === 'Square' && <Square size={size} color={color} />}
      {figure === 'Triangle' && <Triangle size={size} color={color} />}
      {figure === 'Circle' && <Circle size={size} color={color} />}
    </div>
  )
}
FigureControl.propTypes = {
  id: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  displayColorPicker: PropTypes.bool,
  onSizeChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}
