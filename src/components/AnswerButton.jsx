import React, { Component } from 'react';
import '../css/AnswerButton.css';

class AnswerButton extends Component {
  render() {
    const {index,handler} = this.props;
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