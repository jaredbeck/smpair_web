import React from 'react';

var PlayerListItem = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
      </tr>
    );
  }
});

export default PlayerListItem
