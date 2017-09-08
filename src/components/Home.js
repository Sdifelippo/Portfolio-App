import React, { Component } from 'react';
//Imports styles page
import '../styles/App.css';

class Home extends Component {
  render() {

    let headerStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "18rem"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "10rem"
    }


    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
            <h1>Welcome To My Portfolio</h1>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">

              <div className="subtitle" style={subtitleStyle}>

              </div>
            </div>
          </div>
        </nav>
        {this.props.children}

      </div>
    );
  }
}

export default Home;
