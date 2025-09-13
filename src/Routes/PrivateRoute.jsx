import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()
    console.log(location)
    console.log('login page location ', location);
    if(loading){
        return  <Spinner className='' animation="border" variant="danger" />
    }

   

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;