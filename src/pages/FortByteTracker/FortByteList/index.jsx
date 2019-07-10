import React from 'react'
import styled from 'styled-components';

const StyledForByteList = styled.div`
  display: flex;
  flex-direction: column;
`

const FortByteList = ({ fortbytes }) => (
  <StyledForByteList>
    {fortbytes.map(fortByte => <div key={fortByte.id}>{fortByte.description}</div>)}
  </StyledForByteList>
);

export default FortByteList;