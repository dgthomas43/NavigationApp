import React, {Component} from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './src/screens/home';
import Login from './src/screens/login';
import SignUp from './src/screens/signup';
import AuthLoading from './src/screens/authloading'

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp } 
},
{
  headerMode: 'none'
});


export default createSwitchNavigator({
  AuthLoading: { screen: AuthLoading },
  Auth: AppNavigator
});
