import React from 'react'
import styled from 'styled-components';
import { styled as mStyled } from '@material-ui/styles';
import PuzzleIcon from '@material-ui/icons/Extension';
import DoneIcon from '@material-ui/icons/Done';
import { Button } from '@material-ui/core';
import { HexColorA } from 'utils/styles';

const StyledFortByteItem = styled.div`
  display: flex;
  background-color: ${HexColorA('#000D4D', 0.7)};
  height: 50px;
  margin-bottom: 5px;
`

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  color: #81A3DE;
  margin-left: 20px;
`

const StyledButton = mStyled(({ isComplete, ...restProps }) => <Button {...restProps}/>)({
  backgroundColor: '#000D4D',
  color: props =>  props.isComplete ? "lime" : "white",
  minWidth: '80px'
})

const StyledLink = styled.a`
  :visited,:active,:visited,:link {
    color: #81A3DE;
  }
`

const FortByteItem = ({ fortByte, onDoneClick }) => (
  <StyledFortByteItem>
    <StyledButton isComplete={fortByte.isComplete} onClick={() => onDoneClick(fortByte.id)}>
      {fortByte.isComplete ? <DoneIcon/> : <PuzzleIcon/>} 
      <div>Done</div>
    </StyledButton>
    <StyledDescription>
    {fortByte.canBeFound ? <StyledLink href={fortByte.url} target='blank'>{fortByte.description}</StyledLink> : <div>{fortByte.description}</div>}
    </StyledDescription>
  </StyledFortByteItem>
);


export default FortByteItem;