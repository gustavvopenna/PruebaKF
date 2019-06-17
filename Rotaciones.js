// Primer ejercicio

const rotations = (rounds, arr) => {
  for (let i = 0; i < rounds; i++) {
    let lastPos = arr[arr.length - 1]
    arr.pop()
    arr.unshift(lastPos)
  }
  return arr
}

console.log(rotations(2, [1, 2, 3, 4, 5]))
