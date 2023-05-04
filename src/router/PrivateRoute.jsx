import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {


    const { user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className='d-flex justify-content-center align-items-center'>
        <div className="spinner-border"  role="status" style={{width: "3rem", height: "3rem", marginTop: '150px', marginBottom: "150px"}}>
              <span className="visually-hidden">Loading...</span>
         </div>
      </div>;
    }
  

    if(user){
        return children;
    }

   

    return <Navigate state={{from: location}}  to="/login" replace>  </Navigate>
};

export default PrivateRoute;