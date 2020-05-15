/**
 * An array shuffling function using Fisher-Yates shuffle algorithm
 * @param array An array that you want to be shuffled
 */
function shuffle(array: any[]) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle