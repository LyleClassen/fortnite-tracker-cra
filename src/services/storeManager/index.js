
const COMPLETED_FORTBYTES = 'COMPLETED_FORTBYTES';

export const storeCompletedFB = (fbID) => {
  const completedFB = JSON.parse(localStorage.getItem(COMPLETED_FORTBYTES)) || [];

  if(completedFB.includes(fbID)){
    completedFB.splice(completedFB.indexOf(fbID),1);
  }
  else{
    completedFB.push(fbID);
  }

  localStorage.setItem(COMPLETED_FORTBYTES, JSON.stringify(completedFB));
}

export const getCompletedFB = () => JSON.parse(localStorage.getItem(COMPLETED_FORTBYTES)) || [];