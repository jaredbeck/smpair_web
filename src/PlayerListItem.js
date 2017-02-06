import React from 'react';

class PlayerListItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
      </tr>
    );
  }
}

export default PlayerListItem
