import React, { Component } from 'react';
import Banner from "../image/banner.jpg";
import { Carousel } from 'antd';
import "../componentCss/home.css";
class Carousels extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay className="ant-carousel">
          <div className="slick-slide"><img className="picture" src={Banner} alt="banner"/></div>
          <div className="slick-slide"><img className="picture" src={Banner} alt="banner"/></div>
          <div className="slick-slide"><img className="picture" src={Banner} alt="banner"/></div>
          <div className="slick-slide"><img className="picture" src={Banner} alt="banner"/></div>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
