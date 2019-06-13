import { ADD_PLACE, SELECT_PLACE } from '../actions/places';

const initialState = []

export default (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_PLACE:
      return [ 
        ...state, 
        {
          id: action.id,
          marker: action.marker,
          selected: false,
        } 
      ];
    case SELECT_PLACE:
      return state.map(place => place.id === action.id ? {...place, selected: true} : {...place, selected: false})
    default:
      return state
  }
}
