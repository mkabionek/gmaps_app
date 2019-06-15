import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlaceItem from './PlaceItem'
import { selectPlace } from '../actions/places';

export class PlacesList extends Component {

  render() {
    let places = this.props.places.map(place => 
        <PlaceItem 
          key={place.id} 
          place={place} 
          onSelect={this.props.selectPlace} 
          selected={place.selected}
        />
      )

    return (
      <div>
        <h4>Places list:</h4>
        <ul className="places-list" >
          {places.length > 0 ? places : <p className="info">No places selected</p>}
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  places: state.places.items
})

const mapDispatchToProps = {
  selectPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList)
