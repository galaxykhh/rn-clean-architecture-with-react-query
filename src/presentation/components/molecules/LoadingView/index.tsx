import React from 'react';
import Box from '@presentation/components/atom/Box';
import { ActivityIndicator } from 'react-native';

const LoadingView: React.FC = () => {
    return (
        <Box
            flex={1}
            justifyContent='center'
            alignItems='center'>
            <ActivityIndicator />
        </Box>
    );
};

export default LoadingView;
