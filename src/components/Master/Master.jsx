import React, { useEffect, useState } from "react";
import "./Master.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import MasterSingleCard from "../MasterSingleCard/MasterSingleCard";
import { FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";


// import { LazyLoadImage } from "react-lazy-load-image-component";
// import PlaceholderImage from "../../assets/bannerjpg.jpg";s
import "react-lazy-load-image-component/src/effects/blur.css";

const Master = () => {
  const [masters, setMaters] = useState([]);

  useEffect(() => {
    fetch("https://client-side-smshaown.vercel.app/chefDetails")
      .then((res) => res.json())
      .then((data) => setMaters(data));
  }, []);

  return (
    <div className="top-container pt-5 pb-5 mt-5">
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <h5 className="fw-bold text-danger">
              <span>
                {" "}
                <img
                  src="https://qichen-react.vercel.app/assets/images/prev-arrow.png"
                  alt=""
                />{" "}
              </span>
              BEST FOOD MENU
            </h5>
            <h2 className="masterText">Meet Our Exclusive & Master Chefs</h2>
            <div>
              <div className="d-flex mt-3 mb-3">
              < FaCheckCircle style={{width: "40px", height: "40px", color: "#DF3F00", marginRight: "10px"}} /> 
                <h5> 25 Years of Experience in Restaurant Services in USA </h5>
              </div>
              <div className="d-flex mb-3">              
              < FaCheckCircle style={{width: "50px", height: "50px", color: "#DF3F00", marginRight: "10px"}} />                  
                <h5 style={{color: "#0E1317"}}>Any Kind Of Food Made For Customer and So Much Yamee $ Testy</h5>
              </div>
            </div>
            <p style={{fontSize: "18px"}}>
              Sit amet consectetur adipiscing elitsue risus mauris quam
              adipiscing phasellus aene ante orcirat scelerisque enim ut nulla
            </p>

            <button className="btn btn-outline-danger p-3 fw-bold mt-4">BECOME A CHEF <FaLongArrowAltRight /></button>
          </div>
          <div className="col-lg-8">
            <Row xs={1} md={3}>
              {masters?.map((master) => (
                <MasterSingleCard
                  key={master.id}
                  master={master}
                ></MasterSingleCard>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Master;
