
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function randomSize(max, min) {
  return min + Math.random() * (max - min)
}

export { randomColor, randomSize }