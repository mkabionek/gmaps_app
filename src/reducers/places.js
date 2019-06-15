import {
  ADD_PLACE,
  SELECT_PLACE,
  FETCH_DETAILS,
  SELECT_PLACE_ID,
  CLEAR_DETAILS
} from '../actions/places';

const initialState = {
  items: [],
  placeId: null,
  placeDetails: null
}

export default (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state, 
        items: [
          ...state.items,
          {
          id: action.id,
          marker: action.marker,
          selected: false,
          }
        ]
      };
    case SELECT_PLACE:
      return {
        ...state,
        items: state.items.map(place => place.id === action.id ? {...place, selected: true} : {...place, selected: false})
      }
    case SELECT_PLACE_ID:
      return {
        ...state,
        placeId: action.placeId
      }
    case FETCH_DETAILS:
      return {
        ...state,
        placeDetails: action.placeDetails
      }
    case CLEAR_DETAILS:
      return{
        ...state,
        placeDetails: null,
        placeId: null
      }
    default:
      return state
  }
}
