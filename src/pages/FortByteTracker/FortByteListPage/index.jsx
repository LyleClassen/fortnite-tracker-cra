import React, { useState } from 'react'
import styled from 'styled-components';
import fortByteImg from 'assets/images/fortbyte.png';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const StyledFortByteListPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFortByteImg = styled.img`
  width: 200px;
`;

const ImageHeader = styled.div`
  display: flex; 
  flex-direction: column;
  text-align: center;
  font-size: 2rem;
`;

const FortByteListPage = ({ fortByteData }) => {
  const [visibleFortBytes, setVisibleFortBytes] = useState(fortByteData.fortBytes)
  return (
    <StyledFortByteListPage>
      <ImageHeader>
        <div>
          <StyledFortByteImg src={fortByteImg} alt="FortByte" />
        </div>
        <div>
          Updated: {fortByteData.lastUpdatedDate}
        </div>
      </ImageHeader>
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch checked/>
            }
            label="Hide Completed"
          />
          <FormControlLabel
            control={
              <Switch checked/>
            }
            label="Hide Achievable"
          />
          <FormControlLabel
            control={
              <Switch checked/>
            }
            label="Show Unlocked Only"
          />
        </FormGroup>
      </div>
      <div>
        {visibleFortBytes.map(fortByte => <div key={fortByte.id}>{fortByte.description}</div>)}
      </div>
    </StyledFortByteListPage>
);}

export default FortByteListPage;