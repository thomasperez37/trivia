import React, { Component } from 'react';
import AnswerButton from './AnswerButton';
import QuestionText from './QuestionText';
import ResetButton from './ResetButton';

class Question extends Component {
  
  render() {
      
    const question = this.props.question;
      
    return (
      <div className="question">
         <QuestionText question={question.title}/>
         {question.answers.map(answerText => (
          <AnswerButton answerText={answerText}/>
        ))}
         <ResetButton/>
      </div>
    );
  }
}

export default Question;