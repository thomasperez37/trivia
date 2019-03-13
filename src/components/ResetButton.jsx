import React, { Component } from 'react';
import '../css/ResetButton.css';

class ResetButton extends React.Component {
  render() {
    const {handle: {resetQuestion,resetIndex}} = this.props;
    console.log("win",resetQuestion,resetIndex);
    return (
      <div className="resetbutton">
        <button onClick={() => {
          resetIndex()
          return resetQuestion()
        }}>
        Reset
        </button>
      </div>
    );
  }
}

export default ResetButton;