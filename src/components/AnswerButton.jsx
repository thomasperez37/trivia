import React, { Component } from 'react';
import '../css/AnswerButton.css';

class AnswerButton extends Component {
  render() {
    const {
      index,
      handler,
      correct,
      incorrect
    } = this.props;
    
    if(correct){
      return (
        <div className="answerbutton">
          <button onClick={() => handler(index)} style={{backgroundColor: 'green'}}>
            {this.props.answerText}
          </button>
        </div>
      );
    }
    if(incorrect){
      return (
        <div className="answerbutton">
          <button onClick={() => handler(index)} style={{backgroundColor: 'red'}}>
            {this.props.answerText}
          </button>
        </div>
      );
    }
    return (
      <div className="answerbutton">
        <button onClick={() => handler(index)}>
          {this.props.answerText}
        </button>
    </div>
    );
  }
}

export default AnswerButton;