import React from 'react'

function PlaceDetails({name, lat, lng}) {

  if(name === undefined) return '';

  return (
    <div className="place-details">
      <h1>{name}</h1>
      <p>{lat}, {lng}</p>
    </div>
  )
}

export default PlaceDetails
