import React, { Component } from 'react';
import '../css/QuestionText.css';

class QuestionText extends React.Component {
  render() {
    return (
      <div className="questiontext">
        <h1>{this.props.question}</h1>
      </div>
    );
  }
}

export default QuestionText;