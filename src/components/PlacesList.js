import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlaceItem from './PlaceItem'
import { selectPlace } from '../actions/places';

export class PlacesList extends Component {

  render() {
    let places = this.props.places.map(place => <PlaceItem key={place.id} place={place} onSelect={this.props.selectPlace}/>)

    return (
      <ul>
        {places}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  places: state.places
})

const mapDispatchToProps = {
  selectPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList)
