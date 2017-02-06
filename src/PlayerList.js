import React from 'react';
import PlayerListItem from './PlayerListItem';
import AddPlayerForm from './AddPlayerForm';

var PlayerList = React.createClass({
  getInitialState: function() {
    return {
      players: [
        {id: "12011", name: "Steve Colburn", rating: "-5.2"},
        {id: "12212", name: "Jared Beck", rating: "3.4"},
        {id: "12443", name: "Andrew, Son of Jack", rating: "4.5"}
      ]
    };
  },
  render: function() {
    var players = this.state.players.map(function(player) {
      return (
        <PlayerListItem
          id={player.id}
          key={player.id}
          name={player.name}
          rating={player.rating}
        />
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Players</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table table-bordered table-striped table-hover">
              <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Rating</th>
              </tr>
              </thead>
              <tbody>
                {players}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <AddPlayerForm />
          </div>
        </div>
      </div>
    );
  }
});

export default PlayerList
