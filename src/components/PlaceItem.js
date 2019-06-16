import React from 'react'

const PlaceItem = ({ id, onSelect, selected }) => {

  if(id === undefined || id.length === 0) return '';

  const active = selected? ' active' : ''; 
    return <li
      className={`places-item${active}`}
      onClick={() => {onSelect(id) }} 
    >
      {id}
    </li>
}
  
export default PlaceItem 