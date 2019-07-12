import React from 'react'
import styled from 'styled-components';
import FortByteItem from './FortByteItem';

const StyledForByteList = styled.div`
  display: flex;
  flex-direction: column;
`

const FortByteList = ({ fortbytes, onDoneClick }) => (
  <StyledForByteList>
    {fortbytes.map(fortByte => <FortByteItem key={fortByte.id} fortByte={fortByte} onDoneClick={onDoneClick}/>)}
  </StyledForByteList>
);

export default FortByteList;