import React from 'react'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
import { colors } from '../../styles'

export default function ColorSelector({
  id,
  color = colors.base,
  displayColorPicker = false,
  handleClick,
  handleChange,
  handleClose,
}) {
  return (
    <span id={id}>
      <div
        role="presentation"
        onClick={handleClick}
        style={{
          padding: '5px',
          marginTop: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: color,
          }}
        />
      </div>
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: '2', marginLeft: '70px' }}>
          <div
            role="presentation"
            onClick={handleClose}
            style={{
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            }}
          />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </span>
  )
}

ColorSelector.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  displayColorPicker: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}
