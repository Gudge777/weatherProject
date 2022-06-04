import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MainContext from './Components/MainContext/MainContext';
import {CurrentStatus} from "./Components/CurrentStatus/CurrentStatus";

function App() {
  return (
    <div className="App">
      <Header/>
      <CurrentStatus />
      <MainContext />
    </div>
  );
}

export default App;
