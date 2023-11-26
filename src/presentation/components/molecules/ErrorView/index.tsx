import React from 'react';
import Box from '@presentation/components/atom/Box';
import { ActivityIndicator } from 'react-native';
import Typography from '@presentation/components/atom/Typography';

type ErrorViewProps = {
    message?: string;
};

const ErrorView: React.FC<ErrorViewProps> = ({ message }) => {
    return (
        <Box
            flex={1}
            justifyContent='center'
            alignItems='center'>
            <Typography>{message ?? 'Error occured'}</Typography>
        </Box>
    );
};

export default ErrorView;
