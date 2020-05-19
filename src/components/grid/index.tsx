import React, {FC, Children, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { createGrid } from 'reducers'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

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