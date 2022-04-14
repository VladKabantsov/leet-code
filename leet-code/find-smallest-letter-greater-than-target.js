/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// letters = ["c","f","j"], target = "a" -> "c"
// letters = ["c","f","j"], target = "c" -> "f"
// letters = ["c","f","j"], target = "d" -> "f"
const nextGreatestLetter = function (letters, target) {
    for (let char of letters) {
        if (target < char) {
            return char
        }
    }

    return letters[0]
}

const nextGreatestLetterBinary = (letters, target) => {
    let left = 0
    let right = letters.length - 1

    while (left <= right) {
        const middleIdx = Math.ceil((left + right) / 2)

        if (letters[middleIdx] > target) {
            right = middleIdx - 1
        } else {
            left = middleIdx + 1
        }
    }

    return letters[left] || letters[0]
}

// console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')) // 'c'
// console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')) // 'f'
// console.log(nextGreatestLetter(['c', 'f', 'j'], 'd')) // 'f'

console.log(nextGreatestLetterBinary(['c', 'f', 'j'], 'a')) // 'c'
console.log(nextGreatestLetterBinary(['c', 'f', 'j'], 'c')) // 'f'
console.log(nextGreatestLetterBinary(['c', 'f', 'j'], 'd')) // 'f'
console.log(nextGreatestLetterBinary(['c', 'f', 'j'], 'j')) // 'f'