import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Customer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Customer = () => {
  return (
    <Container className="mb-5 mt-5 pt-5">
      <div className="text-center">
        <h4 className="textInfo">FOODS REVIEWS</h4>
        <h2 className="text-style">Global Customer Feedback</h2>
      </div>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              style={{ height: "200px" }}
              src="https://images.pexels.com/photos/14876457/pexels-photo-14876457.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            
            <Card.Body>
              <img
                style={{
                  width: "75px",
                  height: "75px",
                  marginTop: "-70px",
                  marginLeft: "38%",
                }}
                className="rounded-circle"
                src="https://images.pexels.com/photos/1937791/pexels-photo-1937791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <Card.Title>Douglas Keane</Card.Title>
              <Card.Text>
                I have to say that i love dominos handmasde pan pizza it is so
                so good, All product good, and service good, 
                Items with poor reliability were
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src="https://images.pexels.com/photos/14863907/pexels-photo-14863907.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <img
                style={{
                  width: "75px",
                  height: "75px",
                  marginTop: "-75px",
                  marginLeft: "38%",
                }}
                className="rounded-circle"
                src="https://images.pexels.com/photos/3785110/pexels-photo-3785110.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />

              <Card.Title>Rick Shohel</Card.Title>

              <Card.Text>
                They have always given me sound advice on purchases. Recommended
                items are were always reliable. Items with poor reliability were
                duds.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src="https://images.pexels.com/photos/14866628/pexels-photo-14866628.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <img
                style={{
                  width: "75px",
                  height: "75px",
                  marginTop: "-70px",
                  marginLeft: "38%",
                }}
                className="rounded-circle"
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <Card.Title>Jamil Dev</Card.Title>
              <Card.Text>
                I had a great time eating delicous food at your restaurant, the
                wailters and waitrsses were committed to great service and were
                and vary friendly
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Customer;
