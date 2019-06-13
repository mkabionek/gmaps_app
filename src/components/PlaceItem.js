import React from 'react'

export default function PlaceItem({place, onSelect}) {
  console.log(place);
  
  return (
    <li key='5' onClick={ () => {onSelect(place.id)} } >
      {place.id}
    </li>
  )
}
