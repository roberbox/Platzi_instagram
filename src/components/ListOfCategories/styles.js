import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 0px 0 9px 0;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
  }

  ${props => props.fixed && css`
    { 
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      background: white;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
    }
  `}

`

export const Item = styled.li`
  padding: 0 8px;
`
