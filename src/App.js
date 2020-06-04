import React, { Component } from 'react';
import data from "./data/whiskies.json"
import Example from "./components/example"
import './App.css';

class App extends Component {
  render(){

    
  return (
    <div className="App container ">
      
   <h1>Whiskey Selection</h1>


  <Example/>
    </div>
  );
}
}

export default App;
