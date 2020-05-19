import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: 1px solid ${theme.colors.black};
    font-size: 20px;
    font-weight: bold;
    height: auto;
    transition: ${theme.transition};
    user-select: none;
    cursor: pointer;
    
    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }
    
    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`