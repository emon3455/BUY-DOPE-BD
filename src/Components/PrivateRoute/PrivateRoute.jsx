import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;