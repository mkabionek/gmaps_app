import React from 'react'

function PlaceDetails({place}) {

  if(!place) return '';

  return (
    <div className="place-details">
      <h1>{place.name}</h1>
      <p>{`${place.geometry.location.lat()}, ${place.geometry.location.lng()}`}</p>
    </div>
  )
}

export default PlaceDetails
