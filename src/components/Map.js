import React, { Component } from 'react'

export class Map extends Component {

  constructor(props){
    super(props);
    this.state = { markers: []}
    this.map = null;
  }

  initMap = () => {
    this.map = new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
          lat: this.props.lat,
          lng: this.props.lon
       }
    });
    var buttonDiv = document.createElement('div');
      var btn = this.addToListButton(buttonDiv);
      btn.index = 1;
      this.map.controls[window.google.maps.ControlPosition.BOTTOM_CENTER].push(btn);
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

    button.addEventListener('click', this.add);
    return button;
  }

  add = () => {
    this.setState({markers: []})
    console.log('add to list')
  }

  placeMarkerAndPanTo = (latLng, map) => {
    const marker = new window.google.maps.Marker({
      position: latLng,
      map
    });
    let markers = this.state.markers;
    markers.push(marker)
    this.setState({markers})
  }

  componentDidMount() {
    this.initMap();  
    this.map.addListener('click', (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.placeMarkerAndPanTo(e.latLng, this.map);
    })
  }

  render() {
    return <div className="google-map" ref="map" />
  }
}

export default Map
