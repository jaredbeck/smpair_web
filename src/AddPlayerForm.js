import React from 'react';

class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.clear();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const input = event.target;
    this.setState({[input.name]: input.value.trim()});
  }

  handleSubmit(e) {
    e.preventDefault();
    const player = {
      name: this.state.name,
      id: this.state.id,
      rating: this.state.rating
    };
    this.props.onAddPlayer(player);
    this.clear();
  }

  clear() {
    this.state = {
      name: '',
      id: '',
      rating: ''
    }
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
                  <input
                    className="form-control"
                    name="name"
                    required
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.name}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    className="form-control"
                    name="id"
                    required
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.id}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Rating</label>
                  <input
                    className="form-control"
                    name="rating"
                    required
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.rating}
                  />
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
