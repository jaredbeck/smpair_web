import React from 'react';
import PlayerListItem from './PlayerListItem';
import AddPlayerForm from './AddPlayerForm';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {id: "81", name: "Keith Arnold", rating: "4.4"},
        {id: "12212", name: "Jared Beck", rating: "3.4"},
        {id: "12011", name: "Steve Colburn", rating: "-5.2"},
        {id: "13614", name: "Samantha Fede", rating: "-5.0"},
        {id: "14837", name: "Lisa Scott", rating: "-2.3"},
        {id: "12443", name: "Andrew, Son of Jack", rating: "4.5"}
      ]
    };
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  handleAddPlayer(player) {
    const newPlayers = this.state.players.concat(player);
    this.setState({players: newPlayers});
  }

  render() {
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
            <AddPlayerForm onAddPlayer={this.handleAddPlayer} />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerList
