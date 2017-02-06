import React from 'react';

var AppHeader = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">SMPair</a>
          </div>
          <div className="navbar-text">
            Swiss-McMahon Tournament Pairing
          </div>
        </div>
      </nav>
    );
  }
});

export default AppHeader
