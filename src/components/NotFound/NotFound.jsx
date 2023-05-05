import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const {error, status} = useRouteError();
    return (
        <div className='my-container mt-10 text-center'>
            <img src="https://i.ibb.co/KDXJNkv/error-404.png"  style={{width: "350px", height: "300px" }} alt="" className='mt-5' />
            <h3 className='fw-bold'> {error.message}</h3>
               
            <h3 className='text- 2xl font-semibold text-orange-800'>Not Found This Page</h3>  
          
        </div>
    );
};

export default NotFound;