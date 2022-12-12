import React, { useEffect, useState } from 'react'
import FigureControl from './components/molecules'
import { randomColor, randomSize } from './utils/random'
import { allEqual } from './utils/helpers'

function App() {
  const [sizes, setSizes] = useState({
    triangle1: parseInt(randomSize(50, 150), 10),
    circle1: parseInt(randomSize(50, 150), 10),
    square1: parseInt(randomSize(50, 150), 10),
  })
  const onSizeChange = (e, key) => {
    setSizes({ ...sizes, [key]: Number(e.target.value) })
  }
  useEffect(() => {
    if (allEqual(sizes)) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Todas la figuras tienen el mismo tamaño')
    }
  }, [sizes])

  const [displayColorPicker, setDisplayColorPicker] = useState({
    triangle1: false,
    circle1: false,
    square1: false,
  })
  const handleClick = (key) => {
    setDisplayColorPicker({
      ...displayColorPicker,
      [key]: !displayColorPicker[key],
    })
  }
  const handleClose = (key) => {
    setDisplayColorPicker({
      ...displayColorPicker,
      [key]: false,
    })
  }

  const [figColors, setFigColors] = useState({
    triangle1: randomColor(),
    circle1: randomColor(),
    square1: randomColor(),
  })
  const handleChange = (key, color) => {
    setFigColors({
      ...figColors,
      [key]: color.hex,
    })
  }
  useEffect(() => {
    if (allEqual(figColors)) {
      // eslint-disable-next-line no-alert, no-undef
      alert('Todas la figuras tienen el mismo color')
    }
  }, [figColors])

  return (
    <div className="App" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <h1>Ejercicio useState y useEffect.</h1>
      <FigureControl
        id="triangle1"
        figure="Triangle"
        color={figColors.triangle1}
        size={sizes.triangle1}
        displayColorPicker={displayColorPicker.triangle1}
        handleClick={() => handleClick('triangle1')}
        handleClose={() => handleClose('triangle1')}
        handleChange={(color) => handleChange('triangle1', color)}
        onSizeChange={(e) => onSizeChange(e, 'triangle1')}
      />
      <FigureControl
        id="circle1"
        figure="Circle"
        color={figColors.circle1}
        size={sizes.circle1}
        displayColorPicker={displayColorPicker.circle1}
        handleClick={() => handleClick('circle1')}
        handleClose={() => handleClose('circle1')}
        handleChange={(color) => handleChange('circle1', color)}
        onSizeChange={(e) => onSizeChange(e, 'circle1')}
      />
      <FigureControl
        id="square1"
        figure="Square"
        color={figColors.square1}
        size={sizes.square1}
        displayColorPicker={displayColorPicker.square1}
        handleClick={() => handleClick('square1')}
        handleClose={() => handleClose('square1')}
        handleChange={(color) => handleChange('square1', color)}
        onSizeChange={(e) => onSizeChange(e, 'square1')}
      />
    </div>
  )
}

export default App
