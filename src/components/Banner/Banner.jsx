import React from "react";
import banner from "../../assets/banner.jpg";
import downArrow from "../../assets/down-arrow.png";
import './Banner.css'
import { Button, Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Banner = () => {
  return (
    <div className="top-banner">
      <div className="container pt-5 mx-auto">
        <div className="row">
          <div className="col-md-6 banner-text">
            <h1 >Crispy <br /> Chicken <br /> Burgers</h1>
            <p className="mt-3">Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>

            <div className="mb-5 mt-4">
                <img className="img-fluid downArrow " src={downArrow} alt="" />
                <Button className=" ml-3 button-info ">BOOK A TABLE</Button>
            </div>
          </div>
          <div className="col-md-6">
          {/* <img className="img-fluid banner-img"  src={banner} alt="" /> */}
            <LazyLoadImage
            src={banner}
            effect="blur"
            className="img-fluid banner-img"
            alt="Image Alt"
            variant="top"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
