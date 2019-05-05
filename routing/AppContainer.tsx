import React from 'react';
import {createAppContainer, createStackNavigator, NavigationScreenConfig} from 'react-navigation';
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null
        }
    }
}, {initialRouteName: 'Login'});

export default createAppContainer(AppNavigator);

