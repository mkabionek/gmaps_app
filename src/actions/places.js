export const ADD_PLACE = 'ADD_PLACE';
export const SELECT_PLACE = 'SELECT_PLACE';

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

