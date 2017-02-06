import React from 'react';

class AddPlayerForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const player = {
      name: this.refs.name.value.trim(),
      id: this.refs.id.value.trim(),
      rating: this.refs.rating.value.trim()
    };
    this.props.onAddPlayer(player);
    this.refs.name.value = '';
    this.refs.id.value = '';
    this.refs.rating.value = '';
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Add Player</div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" ref="name" required type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>ID</label>
                  <input className="form-control" ref="id" required type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Rating</label>
                  <input className="form-control" ref="rating" required type="text" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-default">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPlayerForm;
