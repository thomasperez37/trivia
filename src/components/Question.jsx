import React, { Component } from 'react';
import AnswerButton from './AnswerButton';
import QuestionText from './QuestionText';
import ResetButton from './ResetButton';

class Question extends Component {
  
  render() {
    return (
      <div className="question">
         <QuestionText/>
         <AnswerButton/>
         <AnswerButton/>
         <AnswerButton/>
         <AnswerButton/>
         <ResetButton/>
      </div>
    );
  }
}

export default Question;