import React, { Component } from 'react';


class Portfolio extends Component {
  render() {

    let ProjPics = {
  "height": "15rem",
  "width": "22rem"
    }

    return (
    <div className="row">
      <div className="col-lg-6 col-lg-offset-3">
        <h3 className="sub-headings">Web Developer</h3>
        <hr/>
        <p>Some project I have done</p>
        <img className="BentCreek" style= {ProjPics} alt="BentCreek" src={require('./BCShot.png')} /><img className="MusicSite" style= {ProjPics} alt="Music website" src={require('./MusicScreenShot.png')} />
        <img className="MusicSite" style= {ProjPics} alt="Company Directory website" src={require('./Company.png')} />
      </div>
    </div>
  );
}
}


export default Portfolio;
