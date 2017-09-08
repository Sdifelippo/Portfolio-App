import React, {Component} from 'react';
// Import link
import { NavLink } from 'react-router-dom';
import Button from 'muicss/lib/react/button';

class BaseLayout extends Component {
  render(){

      let FirstStyle = {
        "height": "100%",
        "padding": "100px"
      }
      let buttonStyle = {

        "backgroundPosition": "top",

      }
      let MyImage = {
        "border-radius": "13rem",
        "height": "15rem",
        "width": "22rem"
      }
      let wrapHeader = {
        "height": "85px",
        "width": "100%",
        "background-color": "#223A5E"
      }

      return (
        <div className="wrapHeader" style={wrapHeader}>
        <div className="navButton" >
        <div style={buttonStyle}>
          <Button variant="raised"><NavLink to="/Home" >Home </NavLink></Button>
          </div>
          <div className="navButton">
            <Button variant="raised"><NavLink to="/About" style={buttonStyle}>About</NavLink></Button>
            </div>
            <div className="navButton">
              <Button variant="raised"><NavLink to="/Portfolio" style={buttonStyle}>Portfolio</NavLink></Button>
              </div>
              <div className="navButton">
                <Button variant="raised"><NavLink to="/References" style={buttonStyle}>References</NavLink></Button>
                </div>
                <div className="navButton">
                  <Button variant="raised"><NavLink to="/Contact" style={buttonStyle}>Contact</NavLink></Button>
                  </div>
                </div>
        <div className="app-body about offset col-lg-10 col-lg-offset-1" >
        <section className="row" style= {FirstStyle} >
          <article className="col-lg-5">
            <h2 className="headings">
              Steven Difelippo&apos;s Portfolio
            </h2>
            <hr/>
            <p> Web Developer </p>
            <img className="MyImage" style= {MyImage} alt="StevenDifelippo" src={require('./StevenDifelippo.jpg')}
            />
<Button variant="raised"><NavLink to="/Portfolio" style={{color: '#223A5E'}} activeStyle={{color: '#223A5E'}}>Show Projects</NavLink></Button>
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
        </div>


      );
    }
  }

export default BaseLayout;
