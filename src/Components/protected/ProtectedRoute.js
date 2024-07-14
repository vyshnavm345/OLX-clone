import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
// import { UserAuth } from '../context/AuthContext'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';


const ProtectedRoute = ({children}) => {
    // const {user} = UserAuth()
    const {user} = useContext(AuthContext);


    if(!user){
        return <Navigate to='/' />;
    } else{
        return children;
    }
};

export default ProtectedRoute;