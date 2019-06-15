export const ADD_PLACE = 'ADD_PLACE';
export const SELECT_PLACE = 'SELECT_PLACE';
export const FETCH_DETAILS = 'FETCH_DETAILS';
export const SELECT_PLACE_ID = 'SELECT_PLACE_ID';
export const CLEAR_DETAILS = 'CLEAR_DETAILS';

let nextPlace = 0;

export const addPlace = place => ({
  type: ADD_PLACE,
  marker: place,
  id: nextPlace++
})

export const selectPlace = id => ({
  type: SELECT_PLACE,
  id
})

export const selectPlaceId = placeId => {
  if(!placeId){
    return {
      type: CLEAR_DETAILS
    };
  }
  return {
    type: SELECT_PLACE_ID,
    placeId
  }
}

export const fetchDetails = (placeDetails) => ({
  type: FETCH_DETAILS,
  placeDetails
})

