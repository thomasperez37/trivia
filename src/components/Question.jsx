import React, { Component } from 'react';
import AnswerButton from './AnswerButton';
import QuestionText from './QuestionText';
import ResetButton from './ResetButton';
import '../css/Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenIndex : null
      //
    }
  }
  
  handleClick = (index) => this.setState({chosenIndex: index})
  
  
  render() {
      
    const question = this.props.question;
    console.log(this.state.chosenIndex);
    return (
      <div className="question">
        <QuestionText question={question.title}/>
        <div className= "answers">
            {question.answers.map((answerText, i) => (
              <AnswerButton answerText={answerText} handler={this.handleClick} index={i}/>
            ))}
        </div>
        <ResetButton/>
      </div>
    );
  }
}

export default Question;