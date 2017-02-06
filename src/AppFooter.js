import React from 'react';
import moment from 'moment';

var AppFooter = React.createClass({
  render: function() {
    return (
      <div className="container-fluid app-footer">
        <div className="row">
          <div className="col-md-12">
            <p>
              &copy; 2016-{moment().format('YYYY')}
              &nbsp;
              <a href="http://jaredbeck.com">
                Jared Beck
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

export default AppFooter
