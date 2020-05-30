import React from 'react';
import './App.css';
import Main from './components/Main';

let leftIndent = {
  marginLeft: '1em'
}

function App() {
    return (
      <div className="App">
        <h1 className="title" style={leftIndent}>Heroes and Villains</h1>
        <Main />
      </div>
    );
}


export default App;