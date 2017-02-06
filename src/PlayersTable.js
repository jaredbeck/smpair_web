import React from 'react';

var PlayersTable = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Players</h2>
            <table className="table table-bordered table-striped table-hover">
              <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Rating</th>
              </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
            <a className="btn btn-default">
              Add
            </a>
          </div>
        </div>
      </div>
    );
  }
});

export default PlayersTable
