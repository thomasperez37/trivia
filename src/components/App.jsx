import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question';

class App extends Component {

  render() {
     
    return (
      <div className="app">
        <Question question = {{ 
          title : "Test" ,
          answers : ["Red", "Blue", "Green", "Orange"]
        }}/>
      </div>
    );
  }
}

export default App;