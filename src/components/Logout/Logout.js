// React, Hooks
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Context
import { AuthContext } from '../../contexts/AuthContext';

// Services
import * as authService from '../../services/authService';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}