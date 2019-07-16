import React, { useState, useEffect } from 'react'
import fortByteImg from 'assets/images/fortbyte.png';
import ProgressBar from 'components/Progress-Bar';
import FortByteList from './FortByteList'
import FilterSection from './FilterSection';
import { setupFortBytesForUser, onFilterChange, handleDoneClick, countCompletedFB } from './container';
import { StyledFortByteListPage, ImageHeader, StyledFortByteImg } from './styles';
import { CenterDiv } from 'components/layout/CenterDiv';



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

  useEffect(onFilterChange(userFB,filters,setVisibleFortBytes) , [userFB, filters])
  
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
        <ProgressBar value={countCompletedFB(userFB)}/>
      </CenterDiv>
      <CenterDiv>
        <FortByteList fortbytes={visibleFortBytes} onDoneClick={handleDoneClick(userFB, setUserFB)}/>
      </CenterDiv>
    </StyledFortByteListPage>
);}

export default FortByteListPage;