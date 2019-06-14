import React from 'react';
import './App.css';
import Map from './components/Map';
import PlacesList from './components/PlacesList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Map lat={50.05} lon={19.8}/>
      
      <div className="sidebar">
        <SearchBar />
        <PlacesList />
      </div>
    </div>
  );
}

export default App;
