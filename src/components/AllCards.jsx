import React, { Component } from "react";
import Card from "./Card";

export default class AllCards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          {/* item */}
          <Card />
        </div>
        <div className="col-sm-4">
          {/* item */}
          <Card />
        </div>
        <div className="col-sm-4">
          {/* item */}
          <Card />
        </div>
      </div>
    );
  }
}
