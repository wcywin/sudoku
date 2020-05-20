import global from 'global'
import { GRID } from 'typings'
import { copyGrid, getRandomIndex } from 'utils'

/**
 *  Removes numbers from a full grid to create a Sudoku Puzzle
 * @param grid 9x9 Sudoku Grid
 * @param attempts Number of attempts to solve (higher means mor difficult) - default 5
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    global.counter = 0

    // attempt to solve the grid
    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }

    // if the global counter is not 1
    //    grid[row][col] = backup
    //    decrement attempts
  }

  return grid
}

export default removeNumbers
