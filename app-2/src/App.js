import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./Components/List"
// import FuncList from './Components/FuncList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List />
        {/* <FuncList/> */}
      </header>
    </div>
  );
}

export default App;
