import React, { Component } from 'react';
import '../css/AnswerButton.css';

class AnswerButton extends React.Component {
  render() {
    const myClickHandler = () => console.log("paty");
    return (
      <div className="answerbutton">
        <button>
          {this.props.answerText}
        </button>
    </div>
    );
  }
}

export default AnswerButton;