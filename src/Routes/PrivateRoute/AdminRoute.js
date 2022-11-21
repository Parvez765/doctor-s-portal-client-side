import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useAdmin } from '../../hooks/useAdmin';



const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <p className='text-center font-bold text-3xl'>Loading...</p>
    }
    
    if (user?.email && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;