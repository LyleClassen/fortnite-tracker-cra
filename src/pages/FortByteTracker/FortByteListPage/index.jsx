import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import fortByteImg from 'assets/images/fortbyte.png';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FortByteList from '../FortByteList';

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

 const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
 `;

const UNLOCKED = 'UNLOCKED';
const COMPLETED = 'COMPLETED';
export const ACHIEVABLE = 'ACHIEVABLE'

const onCheckChange = (setter) => (evt, checked) => {
  setter(checked);
} 
/**
 * 
 * @param {Array} fortbytes 
 */
const setupFortBytesForUser = (fortbytes) => fortbytes.map(fb => { return { ...fb, isComplete: false}}); 
/**
 * 
 * @param {{fortByteData:{fortBytes: Array}}} param0 
 */
const FortByteListPage = ({ fortByteData }) => {
  const [userFB, setUserFB] = useState(setupFortBytesForUser(fortByteData.fortBytes));
  
  const [visibleFortBytes, setVisibleFortBytes] = useState(userFB);
  const [filterAchievable, setFilterAchievable] = useState(false);
  const [filterUnlocked, setFilterUnlocked] = useState(false);

  useEffect(() => {
    let newFBList = fortByteData.fortBytes;
    if(filterAchievable){
      newFBList = newFBList.filter(fb => !fb.isAchieved);
    }
    if(filterUnlocked){
      newFBList = newFBList.filter(fb => fb.unlocked);
    }
    setVisibleFortBytes(newFBList);
  }, [fortByteData, filterAchievable, filterUnlocked])
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
      <CenterDiv>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch />
            }
            label="Hide Completed"
          />
          <FormControlLabel
            control={
              <Switch checked={filterAchievable} onChange={onCheckChange(setFilterAchievable)} />
            }
            label="Hide Achievable"
          />
          <FormControlLabel
            control={
              <Switch checked={filterUnlocked} onChange={onCheckChange(setFilterUnlocked)} />
            }
            label="Show Unlocked Only"
          />
        </FormGroup>
      </CenterDiv>
      <CenterDiv>
        <FortByteList fortbytes={visibleFortBytes} />
      </CenterDiv>
    </StyledFortByteListPage>
);}

export default FortByteListPage;