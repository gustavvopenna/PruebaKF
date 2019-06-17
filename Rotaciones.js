// Primer ejercicio

const rotations = (rounds, arr) => {
  const newArr = [...arr]
  for (let i = 0; i < rounds; i++) {
    let lastPos = newArr[newArr.length - 1]
    newArr.pop()
    newArr.unshift(lastPos)
  }
  return newArr
}

console.log(rotations(2, [1, 2, 3, 4, 5]))
