import React from 'react';

var AppHeader = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
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
