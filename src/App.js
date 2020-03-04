import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from "./movie"
import Search from "./search"

function App() {
  return (
    <div className="App">
      <Search/>
      <Movie/>
    </div>
  );
}

export default App;
