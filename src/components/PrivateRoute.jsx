import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    console.log('PrivateRoute user:', user); // Debugging log

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;