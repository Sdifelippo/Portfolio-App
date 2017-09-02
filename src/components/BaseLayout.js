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
      let MyImage = {
        "border-radius": "13rem",
    "height": "15rem",
    "width": "22rem"


      }

      return (
        <ul className="navButton">
        <li style={buttonStyle}>
          <NavLink to="/Home" >Home</NavLink>
          </li>
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
              Steven Difelippo&apos;s Portfolio
            </h2>
            <hr/>
            <p> Web Developer </p>
            <img className="MyImage" style= {MyImage} alt="StevenDifelippo" src={require('./StevenDifelippo.jpg')} />

          </article>
        </section>
        </div>
        <div>
         {this.props.children}
        </div>
<hr/>
        <footer className="col-lg-11">
          <span className="footer-title">My Portfolio </span>
          <span>
            Contact me  at Steven.Difelippo@gmail.com
          </span>
        </footer>
        </ul>



      );
    }
  }

export default BaseLayout;
