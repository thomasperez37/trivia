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
  
  resetIndex = () => this.setState({chosenIndex: null})
  
  render() {
    
    const chosenIndex = this.state.chosenIndex;
    const question = this.props.question;
    const resetQuestion = this.props.reset;
    const resetIndex = this.resetIndex;
    const renderChoice = () => {
      if (chosenIndex === null){
        return (
          <div className="question">
            <QuestionText question={question.title}/>
            <div className= "answers">
                {question.answers.map((answerText, i) => (
                  <AnswerButton answerText={answerText} handler={this.handleClick} index={i}/>
                ))}
            </div>
            <ResetButton handle={{resetQuestion,resetIndex}}/>
          </div>
        );
      } else if (chosenIndex === question.correctAnswer){
        return (
          <div className="question">
            <QuestionText question={question.title}/>
            <div className= "answers">
                {question.answers.map((answerText, i) => (
                  <AnswerButton answerText={answerText} correct={ i === question.correctAnswer } handler={this.handleClick} index={i}/>
                ))}
            </div>
            <ResetButton handle={{resetQuestion,resetIndex}}/>
          </div>
        );
      } else if (chosenIndex !== question.correctAnswer){
        return (
          <div className="question">
            <QuestionText question={question.title}/>
            <div className= "answers">
                {question.answers.map((answerText, i) => (
                  <AnswerButton answerText={answerText} incorrect={ true } handler={this.handleClick} index={i}/>
                ))}
            </div>
            <ResetButton handle={{resetQuestion,resetIndex}}/>
          </div>
        );
      }  
    }
    return renderChoice();
  }
}

export default Question;