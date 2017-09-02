import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
    <div className="row">
      <div className="col-lg-6 col-lg-offset-3">
        <h3 className="sub-headings">Desserts</h3>
        <hr/>
        <table className="table">
          <thead>
            <tr>
              <th className="col-lg-3">
                <i className="fa fa-cutlery" aria-hidden="true"></i>
              </th>
              <th className="col-lg-8">Description</th>
              <th className="col-lg-1">
                <i className="fa fa-money" aria-hidden="true"></i>
              </th>
            </tr>
          </thead>
           
        </table>
      </div>
    </div>
  );
}
}


export default Portfolio;
