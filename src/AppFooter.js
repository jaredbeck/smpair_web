import React from 'react';
import moment from 'moment';

class AppFooter extends React.Component {
  render() {
    return (
      <div className="app-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                &copy; 2016-{moment().format('YYYY')}
                &nbsp;
                <a href="http://jaredbeck.com">
                  Jared Beck
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppFooter
