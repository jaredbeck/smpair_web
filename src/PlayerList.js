import React from 'react';
import PlayerListItem from './PlayerListItem';

var PlayerList = React.createClass({
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
                <PlayerListItem id="12011" name="Steve Colburn" rating="-5.2" />
                <PlayerListItem id="12212" name="Jared Beck" rating="3.4" />
                <PlayerListItem id="12443" name="Andrew Jackson" rating="4.5" />
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

export default PlayerList
