import React from 'react'
import styled from 'styled-components';
import { styled as mStyled } from '@material-ui/styles';
import PuzzleIcon from '@material-ui/icons/Extension';
import DoneIcon from '@material-ui/icons/Done';
import { Button } from '@material-ui/core';

const StyledFortByteItem = styled.div`
  display: flex;
  background-color: #000D4D99;
  height: 50px;
  margin-bottom: 5px;
`

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  color: #81A3DE;
  margin-left: 20px;
`

const StyledButton = mStyled(Button)({
  backgroundColor: '#000D4D',
  color: 'white',
})

const FortByteItem = ({ fortByte }) => (
  <StyledFortByteItem>
    <StyledButton>
      {fortByte.isCompleted ? <DoneIcon/> : <PuzzleIcon/>} 
      <div>Done</div>
    </StyledButton>
    <StyledDescription>
    {fortByte.canBeFound ? <a href={fortByte.url} target='blank'>{fortByte.description}</a> : <div>{fortByte.description}</div>}
    </StyledDescription>
  </StyledFortByteItem>
);


export default FortByteItem;