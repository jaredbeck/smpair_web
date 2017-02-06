import React from 'react';
import './AlphaWarning.css';

class AlphaWarning extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="alpha-warning bg-danger">
          <span className="pull-left glyphicon glyphicon-warning-sign" />
          <strong>
            Do not use this software for actual tournaments yet.
            You will be sad.
          </strong>
          <br />
          It does not save your changes, and the
          pairing algorithm hasn't been tested much.
        </p>
      </div>
    );
  }
}

export default AlphaWarning
