import React from 'react'

const PlaceItem = ({place, onSelect, selected}) => (
    <li 
      className={`places-item ${selected && 'active'}`}
      onClick={() => {onSelect(place.id)}} 
    >
      {place.id}
    </li>
  )
  
export default PlaceItem 