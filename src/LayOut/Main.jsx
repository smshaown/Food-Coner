import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {

  const [loading, setLoading] = useState(true);
    setTimeout(() => {     
      setLoading(false);
    }, 2000);
  

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

    return (
      !loading ? 
        <>
          <Header />   
          <Outlet />
          <Footer />
        </>
        : <div className='d-flex justify-content-center align-items-center'>
          <div className="spinner-border"  role="status" style={{width: "3rem", height: "3rem", marginTop: '100px'}}>
                <span className="visually-hidden">Loading...</span>
           </div>
        </div>
    );

};

export default Main;