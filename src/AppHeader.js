import React from 'react';

class AppHeader extends React.Component {
  render() {
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
}

export default AppHeader
