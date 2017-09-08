import React, { Component } from 'react';

class References extends Component {
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
      <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme", padding:10, marginTop:0}}>My References</h1>
      <br/>
      <div className="row">
        <div className="col-md-5 col-md-offset-4">
          <ul style={liStyle} >
            <li>Angelica Rodriguez</li>
            <li>Email: </li>
            <br/>
            <li>Captain Zavala</li>
            <li>Email:</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
}

export default References;
