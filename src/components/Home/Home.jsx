import React from 'react';
import Banner from '../Banner/Banner';
import BestFood from '../BestFood/BestFood';
import Master from '../Master/Master';
import Customer from '../Customer/Customer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Master />
            <BestFood />
            <Customer />
            
        </div>
    );
};

export default Home;