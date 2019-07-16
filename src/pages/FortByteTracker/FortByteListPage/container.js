import { storeCompletedFB, getCompletedFB } from 'services/storeManager';

/**
 * 
 * @param {Array} fortbytes 
 */
export const countCompletedFB = (fortbytes) => fortbytes.filter(fb => fb.isComplete).length; 

export const handleDoneClick = (userFB, setUserFB) => fbId => {
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

export const onFilterChange = (userFB,filters,setVisibleFortBytes) => () => {
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
}

/**
 * 
 * @param {Array} fortbytes 
 */
export const setupFortBytesForUser = (fortbytes) => fortbytes.map(fb => ({ ...fb, isComplete: getCompletedFB().includes(fb.id)}));
