import React, { Component } from 'react';
import AnswerButton from './AnswerButton';
import QuestionText from './QuestionText';
import ResetButton from './ResetButton';
import '../css/Question.css';

class Question extends Component {
  
  render() {
      
    const question = this.props.question;
      
    return (
      <div className="question">
        <QuestionText question={question.title}/>
        <div className= "answers">
            {question.answers.map(answerText => (
              <AnswerButton answerText={answerText}/>
            ))}
        </div>
        <ResetButton/>
      </div>
    );
  }
}

export default Question;