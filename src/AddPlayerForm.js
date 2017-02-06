import React from 'react';

var AddPlayerForm = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Add Player</div>
        <div className="panel-body">
          <form>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>ID</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Rating</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-default">Add</button>
          </form>
        </div>
      </div>
    )
  }
});

export default AddPlayerForm;
