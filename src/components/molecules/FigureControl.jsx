import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { Square, Triangle, Circle } from '../atoms'
import { colors, dimensions } from '../../styles'

export default function FigureControl({
  figure,
  size = dimensions.figure.base,
  color = colors.main,
  onSizeChange,
  handleClick,
  handleChange,
  handleClose,
  displayColorPicker = false,
}) {
  // Eliminar reactCSS, creo que te has complicado.
  const styles = reactCSS({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: color,
      },
      swatch: {
        padding: '5px',
        marginTop: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
        marginLeft: '150px',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  })
  return (
    <div style={{ margin: '50px 20px' }}>
      <div>
        {/* En lugar de ser un span, debes crear un label que tenga la etiqueta htmlFor. Lo ideal es que este al mismo nivel que atoms y sea un componente. */}
        <span>{figure} size</span>
        <input
          // Crearia un InputNumber y lo pondria en atoms.
          // Lo ideal es que sea un componente.
          // Lo mismo para color
          // Le faltan props como id y name.
          type="number"
          value={size}
          min="1"
          max="512"
          style={{ width: '4em' }}
          onChange={onSizeChange}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{figure} color</span>
        <span>
          <div
            style={styles.swatch}
            // id="mini"
            role="presentation"
            onClick={handleClick}
          >
            <div style={styles.color} />
          </div>
          {displayColorPicker ? (
            <div style={styles.popover}>
              <div
                style={styles.cover}
                role="presentation"
                onClick={handleClose}
              />
              <SketchPicker color={color} onChange={handleChange} />
            </div>
          ) : null}
        </span>
      </div>
      {figure === 'Square' && <Square size={size} color={color} />}
      {figure === 'Triangle' && <Triangle size={size} color={color} />}
      {figure === 'Circle' && <Circle size={size} color={color} />}
    </div>
  )
}
FigureControl.propTypes = {
  figure: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  displayColorPicker: PropTypes.bool,
  onSizeChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}
