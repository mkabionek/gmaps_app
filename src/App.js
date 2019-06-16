import React from 'react';
import './App.css';
import Map from './components/Map';
import PlacesList from './components/PlacesList';
import SearchBar from './components/SearchBar';
import { connect } from 'react-redux';
import { selectPlace } from './actions/places';

export class App extends React.Component {

  render(){
    console.log(this.props.places);
    
    return (
      <div className="App">
        <Map lat={50.05} lon={19.8}/>
        
        <div className="sidebar">
          <SearchBar />
          <PlacesList places={this.props.places}  selectPlace={this.props.selectPlace} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places.items
})

const mapDispatchToProps = {
  selectPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(App)