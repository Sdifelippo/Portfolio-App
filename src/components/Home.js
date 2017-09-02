import React, { Component } from 'react';
//Imports styles page
import {NavLink} from 'react-router-dom';
import '../styles/App.css';

class Home extends Component {
  render() {
    let NavTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "18rem"
    }
    let NavLink = {
      "fontFamily": "Raleway",
      "fontSize": "10rem"
    }
    let headerStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "18rem"
    }
    let titleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "10rem"
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
              <ul className="nav navbar-nav">
                <li style={NavTitle}>
                </li>

              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="restaurant-name"
                style={titleStyle}>
                
              </div>
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
