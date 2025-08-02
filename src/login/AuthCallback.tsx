import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { supabase } from '../providers/supabase/supabase';
import { CircularProgress, Box, Typography } from '@mui/material';

export const AuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');

        if (!access_token || !refresh_token) {
            navigate('/login', { replace: true });
            return;
        }

        supabase.auth.setSession({
            access_token,
            refresh_token,
        })
        .then(({ error }) => {
            if (error) {
                setError(error.message);
                setTimeout(() => navigate('/login', { replace: true }), 2000);
            } else {
                navigate('/', { replace: true });
            }
        });
    }, [location.search, navigate]);

    if (error) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Typography color="error" variant="h6">{error}</Typography>
                <Typography variant="body2">Redirecting to login...</Typography>
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            <CircularProgress />
            <Typography variant="body2" mt={2}>Completing authentication...</Typography>
        </Box>
    );
};

AuthCallback.path = '/auth-callback';