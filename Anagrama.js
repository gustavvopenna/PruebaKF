// Segundo ejercicio

const isAnagram = (wordOne, wordTwo) => {
  let counter = 0

  const sortWord = word =>
    word
      .toLowerCase()
      .split('')
      .sort()
      .join('')

  const oneSorted = sortWord(wordOne)
  const twoSorted = sortWord(wordTwo)

  if (oneSorted === twoSorted) {
    return 'Es una anagrama!'
  } else {
    const oneSplit = oneSorted.split('')
    const twoSplit = twoSorted.split('')

    oneSplit.filter(el => {
      if (!twoSplit.includes(el)) counter++
    })
    twoSplit.filter(el => {
      if (!oneSplit.includes(el)) counter++
    })
    return `No es una anagrama y se deben eliminar ${counter} caracteres para que sea uno.`
  }
}

console.log(isAnagram('CBEAD', 'FDA'))
