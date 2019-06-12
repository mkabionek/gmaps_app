import React from 'react';
import './App.css';
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <Map lat={50.05} lon={19.8}/>
      
      <div className="sidebar">
        sidebar
      </div>
    </div>
  );
}

export default App;
