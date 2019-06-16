import React from 'react'

const PlaceItem = ({place, onSelect, selected}) => {
  if(!place) return '';

  const active = selected? ' active' : ''; 
    return <li
      className={`places-item${active}`}
      onClick={() => {onSelect(place.id)}} 
    >
      {place.id}
    </li>
}
  
export default PlaceItem 