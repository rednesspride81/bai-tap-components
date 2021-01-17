import React, { Component } from "react";
import AboutUS from "./AboutUS";
import Contact from "./Contact";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <AboutUS />
          </div>
          <div className="col-sm-4">
            <Contact />
          </div>
        </div>
        ;
      </div>
    );
  }
}
