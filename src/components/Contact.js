import React, { Component } from 'react';

class Contact extends Component {
  render() {

  let liStyle = {
    color: "#E5B13A",
    fontFamily: "Acme",
    fontSize: 25,
    listStyle: "none",
    paddingLeft: 0,
  };

  return(
    <div>
      <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme", padding:10, marginTop:0}}>My Contact Info</h1>
      <br/>
      <div className="row">
        <div className="col-md-5 col-md-offset-4">
          <ul style={liStyle} >
            <li>You May Contact Me At</li>
            <li>Email: Steven.Difelippo@gmail.com </li>
            <br/>
            <li>My LinkedIn</li>
            <li>https:www.linkedin.com/in/steven-difelippo-649247b2/</li>

          </ul>
        </div>
      </div>
    </div>
  );
}
}

export default Contact;
