import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPlace } from '../actions/places';
/* global google */

export class Map extends Component {

  constructor(props){
    super(props);
    this.state = { markers: []}
    this.map = null;
  }

  initMap = () => {
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
          lat: this.props.lat,
          lng: this.props.lon
       },
       draggableCursor: 'default'
    });
    var buttonDiv = document.createElement('div');
      var btn = this.addToListButton(buttonDiv);
      btn.index = 1;
      this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(btn);
  }

  addToListButton = div => {
    var button = document.createElement('div');
    button.style.backgroundColor = '#fff';
    button.style.border = '2px solid #fff';
    button.style.borderRadius = '3px';
    button.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    button.style.cursor = 'pointer';
    button.style.marginBottom = '22px';
    button.style.marginRight = '10px'
    button.style.textAlign = 'center';
    button.title = 'Add to list';
    div.appendChild(button);

    var text = document.createElement('div');
    text.style.color = 'rgb(25,25,25)';
    text.style.fontFamily = 'Roboto,Arial,sans-serif';
    text.style.fontSize = '16px';
    text.style.lineHeight = '38px';
    text.style.paddingLeft = '5px';
    text.style.paddingRight = '5px';
    text.innerHTML = 'Add to list';
    button.appendChild(text);

    button.addEventListener('click', this.addListener);
    return button;
  }

  addListener = () => {
    this.state.markers.map(marker => this.props.addPlace(marker))
    this.setState({markers: []})
  }

  placeMarker = (latLng, map) => {
    const marker = new google.maps.Marker({
      position: latLng,
      icon: {
          url: 'https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-blue.png',
          size: new google.maps.Size(27, 43),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(13.5, 43),
          labelOrigin: new google.maps.Point(13.5, 50)
      }
    });
    marker.setMap(map)
    this.setState({markers: [...this.state.markers, marker]})
  }

  componentDidUpdate(prevProps, prevState) {
    
    this.props.places.map(place => {
      place.marker.setIcon({
        url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
        size: new google.maps.Size(27, 43),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(13.5, 43),
        labelOrigin: new google.maps.Point(13.5, 50)
      })
      if(place.selected){
        let text = `lat: ${place.marker.position.lat().toString()} 
                    lng: ${place.marker.position.lng().toString()}`;
        place.marker.setLabel({text})
      }else{
        place.marker.setLabel(null);
      }
      place.marker.setMap(this.map)
    })
  }
  
  componentDidMount() {
    this.initMap();  
    this.map.addListener('click', (e) => {
      this.placeMarker(e.latLng, this.map);
    })
  }

  render() {
    return <div className="google-map" id="google-map" ref="map" />
  }
}

const mapStateToProps = (state) => ({
  places: state.places
})

export default connect(mapStateToProps, {addPlace})(Map);
