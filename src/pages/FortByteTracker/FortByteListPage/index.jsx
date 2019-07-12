import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import fortByteImg from 'assets/images/fortbyte.png';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FortByteList from '../FortByteList';
import { storeCompletedFB, getCompletedFB } from 'services/storeManager';

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

const handleDoneClick = (userFB, setUserFB) => fbId => {
  const updatedFB = userFB.map(fb => {
    if(fb.id === fbId){
      storeCompletedFB(fbId);
      return {
        ...fb,
        isComplete: !fb.isComplete
      }
    }
    return fb;
  })
  setUserFB(updatedFB);
}

/**
 * 
 * @param {Array} fortbytes 
 */
const setupFortBytesForUser = (fortbytes) => fortbytes.map(fb => ({ ...fb, isComplete: getCompletedFB().includes(fb.id)}));

/**
 * 
 * @param {{fortByteData:{fortBytes: Array}}} param0 
 */
const FortByteListPage = ({ fortByteData }) => {
  const [userFB, setUserFB] = useState(setupFortBytesForUser(fortByteData.fortBytes));
  
  const [visibleFortBytes, setVisibleFortBytes] = useState(userFB);
  const [filterComplete, setFilterComplete] = useState(false);
  const [filterAchievable, setFilterAchievable] = useState(false);
  const [filterUnlocked, setFilterUnlocked] = useState(false);

  useEffect(() => {
    let newFBList = userFB;
    if(filterComplete){
      newFBList = newFBList.filter(fb => !fb.isComplete);
    }
    if(filterAchievable){
      newFBList = newFBList.filter(fb => !fb.isAchieved);
    }
    if(filterUnlocked){
      newFBList = newFBList.filter(fb => fb.unlocked);
    }
    setVisibleFortBytes(newFBList);
  }, [userFB, filterAchievable, filterUnlocked, filterComplete])
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
              <Switch checked={filterComplete} onChange={onCheckChange(setFilterComplete)}/>
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
        <FortByteList fortbytes={visibleFortBytes} onDoneClick={handleDoneClick(userFB, setUserFB)}/>
      </CenterDiv>
    </StyledFortByteListPage>
);}

export default FortByteListPage;