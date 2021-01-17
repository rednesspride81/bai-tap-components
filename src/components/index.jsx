import React, { Component } from "react";
import Carousel from "./Carousel";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";

export default class Components extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Contents />
        <Footer />
      </div>
    );
  }
}
