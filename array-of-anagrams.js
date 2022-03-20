const data = ['стол', 'слот', 'кот', 'кошка', 'ток'] // [['стол', 'слот'], ['кот', 'ток’]]

const arrayOfAnagrams = (array) => {
  const map = {}

  for (let el of array) {
    const sortedWord = el.split('').sort().join('')

    if (sortedWord in map) {
      map[sortedWord].push(el)
    } else {
      map[sortedWord] = [el]
    }
  }

  return Object.values(map).filter(el => el.length > 1)
}

console.log(arrayOfAnagrams(data))