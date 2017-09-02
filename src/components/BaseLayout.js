import React, {Component} from 'react';
// Import link
import { NavLink } from 'react-router-dom';


class BaseLayout extends Component {
  render(){

      let FirstStyle = {
        "textShadow": "1px 1px 2px black",
        "height": "100%",
        "padding": "100px"
      }
      let buttonStyle = {
        "textShadow": "1px 1px 2px black",
        "backgroundPosition": "top",
      }
      let MasterStyle = {
        "height": "100%",
        "padding": "100px"

      }
      return (
        <div>
        <div className="navButton">
          <NavLink to="/Home" style={buttonStyle}>Home</NavLink>
          </div>
          <div className="navButton">
            <NavLink to="/About" style={buttonStyle}>About</NavLink>
            </div>
            <div className="navButton">
              <NavLink to="/Portfolio" style={buttonStyle}>Portfolio</NavLink>
              </div>
        <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style= {FirstStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              First
            </h2>
            <hr/>
            <p className="primary-text">more text </p>
          </article>
        </section>
          <section className="row" style={MasterStyle}>
            <article className="col-lg-6 col-lg-offset-3">
              <h2 className="headings">
                Master
              </h2>
              <hr/>
              <p className="primary-text">
              primary text
              </p>
              <p className="primary-text">
              primary text here
              </p>
            </article>
          </section>
        </div>
        <div>
         {this.props.children}
        </div>
        </div>

      );
    }
  }

export default BaseLayout;
