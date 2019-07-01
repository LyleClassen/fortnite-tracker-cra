import React from 'react'
import styled from 'styled-components';
import fortByteImg from 'assets/images/fortbyte.png';

const StyledFortByteListPage = styled.div`
  display: flex;
`;

const StyledFortByteImg = styled.img`
  
`;

const FortByteListPage = ({ fortByteData }) => (
  <StyledFortByteListPage>
    <div>
      <img src={fortByteImg} alt="FortByte" />
    </div>
  </StyledFortByteListPage>
);

export default FortByteListPage;