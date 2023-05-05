import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FoodCard from '../FoodCard/FoodCard';
import './BestFood.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const BestFood = () => {

    const [bestFoods, setBestFoods] = useState([]);

    useEffect(() => {},[
        fetch('https://client-side-smshaown.vercel.app/yFoods')
        .then(res => res.json())
        .then(data => setBestFoods(data))

    ])

    return (
        <div className='services-container'>
            <div className="p-5 text-center">
                <h5 className="textInfo">BEST FOOD</h5>
                <h1 className="text-style">Choose Your Best Menus</h1>
                
            </div>

            <Container>
               <Row xs={1} md={2} className="g-5 mr-3">
                  <Col>
                     {/* <img className="img-fluid rounded" src="https://i.ibb.co/8cZGnfb/menu-single-1.jpg" alt="" /> */}
                     <LazyLoadImage
                        src="https://i.ibb.co/8cZGnfb/menu-single-1.jpg"
                        effect="blur"
                        className="img-fluid w-100"
                        alt="Image Alt"
                        variant="top"
                    />
                  </Col>
                  <Col>
                    {
                        bestFoods?.map(bestFood => <FoodCard key={bestFood.id} bestFood={bestFood}></FoodCard>)
                    }
                  </Col>
               </Row>
            </Container>
        </div>
    );
};

export default BestFood;