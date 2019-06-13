import React from 'react'

export default function PlaceItem({place, onSelect, selected}) {
  return (
    <li className={`places-item ${selected && 'active'}`}  onClick={ () => {onSelect(place.id)} } >
      {place.id}
    </li>
  )
}
