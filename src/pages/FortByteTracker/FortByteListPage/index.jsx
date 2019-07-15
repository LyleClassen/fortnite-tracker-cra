import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import fortByteImg from 'assets/images/fortbyte.png';
import FortByteList from '../FortByteList';
import { storeCompletedFB, getCompletedFB } from 'services/storeManager';
import FilterSection from './FilterSection';

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
  const [filters, setFilters] = useState({
    complete: false,
    achievable: false,
    unlocked: false,
    searchText: '',
  })
  useEffect(() => {
    let newFBList = userFB;
    if(filters.complete){
      newFBList = newFBList.filter(fb => !fb.isComplete);
    }
    if(filters.achievable){
      newFBList = newFBList.filter(fb => !fb.isAchieved);
    }
    if(filters.unlocked){
      newFBList = newFBList.filter(fb => fb.unlocked);
    }
    if(filters.searchText){
      newFBList = newFBList.filter(fb => fb.description.toLowerCase().includes(filters.searchText.toLowerCase()))
    }
    setVisibleFortBytes(newFBList);
  }, [userFB, filters.complete, filters.achievable, filters.unlocked, filters.searchText])
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
        <FilterSection filters={filters} setFilters={setFilters} />
      </CenterDiv>
      <CenterDiv>
        <FortByteList fortbytes={visibleFortBytes} onDoneClick={handleDoneClick(userFB, setUserFB)}/>
      </CenterDiv>
    </StyledFortByteListPage>
);}

export default FortByteListPage;