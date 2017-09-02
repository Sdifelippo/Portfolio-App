import React, { Component } from 'react';

class About extends Component {
  render() {
    let cuisineStyle = {
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }

    let primaryText = {
        "color": "red"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              My History
            </h2>
            <hr/>
            <p style={primaryText} className="primary-text">
              Ever since I was a young lad I have loved technology
            </p>
            <p className="primary-text">
              </p>
          </article>
        </section>
        <section className="row" style= {cuisineStyle}>
          <article className="col-lg-5">
            

          </article>
        </section>
      </div>
    );
  }
}

export default About;
