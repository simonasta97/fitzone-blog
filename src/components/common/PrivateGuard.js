// React, Hooks
import { Navigate, Outlet } from 'react-router-dom';

// Context
import { useAuthContext } from '../../contexts/AuthContext';

export default function PrivateGuard({children}){
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};