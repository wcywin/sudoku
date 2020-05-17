import React, { FC, Children } from 'react'

import { GRID } from 'typings'
import { fillGrid } from 'utils'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  const grid: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  fillGrid(grid)
  console.log('grid', grid)

  return (
    <Container data-cy="grid-container">
      {Children.toArray([...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container">
          {Children.toArray([...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex} rowIndex={rowIndex} />
          )))}
        </Row>
        )))}
    </Container>
  )
}

export default Grid