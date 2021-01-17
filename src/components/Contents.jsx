import React, { Component } from "react";
import AllCards from "./AllCards";
import Banner from "./Banner";

export default class Contents extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <AllCards />
      </div>
    );
  }
}
