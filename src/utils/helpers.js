// eslint-disable-next-line import/prefer-default-export
export function allEqual(obj) {
  return new Set(Object.values(obj)).size === 1
}

