import React, {FC, Children, useCallback, useEffect } from 'react'
import useMouseTrap from 'react-hook-mousetrap'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { createGrid } from 'reducers'

import Block from './block'
import { Container, Row } from './styles'
import { INDEX } from 'typings'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  function moveDown() {
    console.log('down')
  }

  function moveLeft() {
    console.log('left')
  }

  function moveRight() {
    console.log('right')
  }

  function moveUp() {
    console.log('up')
  }

  useMouseTrap('down', moveDown)
  useMouseTrap('left', moveLeft)
  useMouseTrap('right', moveRight)
  useMouseTrap('up', moveUp)

  return (
    <Container data-cy="grid-container">
      {Children.toArray([...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container">
          {Children.toArray([...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
          )))}
        </Row>
        )))}
    </Container>
  )
}

export default Grid