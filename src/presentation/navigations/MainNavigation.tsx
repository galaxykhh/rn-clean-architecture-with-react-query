import React from 'react';
import {  NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from '@presentation/screens/Posts';
import PostDetailsScreen, { PostDetailsScreenParams } from '@presentation/screens/PostDetails';

export type MainStackParamList = {
    Posts: undefined;
    PostDetails: PostDetailsScreenParams;
};

export const MainStack = createNativeStackNavigator<MainStackParamList>();
export type MainStackNavigationProps = NativeStackNavigationProp<MainStackParamList>;
export type PostsScreenProps = NativeStackScreenProps<MainStackParamList, 'Posts'>;
export type PostDetailsScreenProps = NativeStackScreenProps<MainStackParamList, 'PostDetails'>;

const MainNavigation: React.FC = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name='Posts'
                component={PostsScreen}
            />
            <MainStack.Screen
                name='PostDetails'
                component={PostDetailsScreen}
            />
        </MainStack.Navigator>
    );
};

export default MainNavigation;