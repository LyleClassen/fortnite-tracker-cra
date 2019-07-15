import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { styled as mStyled } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const StyledFilterSection = styled.div`
  display: flex; 
  flex-direction: column;
  margin-bottom: 20px;
`

const StyledSearchSection = styled.div`
  display: flex;
`

const SearchTextField = mStyled(TextField)({
  flexGrow: 4,
});
const ClearSearchButton = mStyled(Button)({
  backgroundColor: '#000D4D',
  color: 'white',
});

const onCheckChange = (setter) => (evt, checked) => {
  setter(checked);
}

const onTextChange = setter => (evt) => {
  setter(evt.target.value);
}

const FilterSection = ({ filters, setFilters }) => {
  const [filterComplete, setFilterComplete] = useState(filters.complete);
  const [filterAchievable, setFilterAchievable] = useState(filters.achievable);
  const [filterUnlocked, setFilterUnlocked] = useState(filters.unlocked);
  const [searchText, setSearchText] = useState(filters.searchText);
  useEffect(() => {
    setFilters({
      complete: filterComplete,
      achievable: filterAchievable,
      unlocked: filterUnlocked,
      searchText,
    })
  }, [filterComplete, filterAchievable, filterUnlocked, searchText, setFilters] )
  return (
  <StyledFilterSection>
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={filterComplete}
            onChange={onCheckChange(setFilterComplete)}
          />
        }
        label="Hide Completed"
      />
      <FormControlLabel
        control={
          <Switch
            checked={filterAchievable}
            onChange={onCheckChange(setFilterAchievable)}
          />
        }
        label="Hide Achievable"
      />
      <FormControlLabel
        control={
          <Switch
            checked={filterUnlocked}
            onChange={onCheckChange(setFilterUnlocked)}
          />
        }
        label="Show Unlocked Only"
      />
    </FormGroup>
    <StyledSearchSection>
      <SearchTextField value={searchText} onChange={onTextChange(setSearchText)} label="Search" />
      <ClearSearchButton onClick={() => setSearchText('')}>Clear</ClearSearchButton>
    </StyledSearchSection>
  </StyledFilterSection>
)};

export default FilterSection;