import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaceItem from './PlaceItem';
import { selectPlace } from '../actions/places';

export class PlacesList extends Component {

  render() {
    const {places, selectPlace} = this.props;

    let list = places.map(place => 
      <PlaceItem 
        key={place.id.toString()} 
        id={place.id} 
        onSelect={selectPlace} 
        selected={place.selected}
      />
    );
    
    if(list.length === 0){
      return <p className="info">No places selected</p>
    }

    return (
      <div>
        <h4>Places list:</h4>
        <ul className="places-list" >
          {list}
        </ul>
      </div>
    )
  }
}

export default PlacesList
