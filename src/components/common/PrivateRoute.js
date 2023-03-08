import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children;
};