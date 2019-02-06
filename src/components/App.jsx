import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question';
import {
 buildFirebase,
 getRandomQuestion,
} from '../clients/firebase';

class App extends Component {
  
  constructor(props){
    super(props);
    var firebaseDatabase = buildFirebase();

    this.state= {
      questions: {},
      currentQuestion: {
          question_text: "What is Your Favorite Color?",
          choices: ["Red", "Blue", "Green", "Orange"],
          correct_choice_index: null,
      } 
    };
    
    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
      let questions = snapshot.val();
      let randomQuestion = getRandomQuestion(questions);
      this.setState({
        questions,
        currentQuestion : randomQuestion,
      })
    });
    
  }
  
  
  
  render(){
    return (
      <div className="app">
        <Question question = {{ 
          title : this.state.currentQuestion.question_text ,
          answers : this.state.currentQuestion.choices
        }}/>
      </div>
    );
  }
}

export default App;