import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import MainContext from './Components/MainContext/MainContext'

function App() {
  return (
    <div className="App">
      <Header/>

      <MainContext />
    </div>
  );
}

export default App;
