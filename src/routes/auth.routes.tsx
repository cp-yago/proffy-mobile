import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import SignUpSuccess from '../pages/SignUpSuccess';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignUpSuccess" component={SignUpSuccess} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  </NavigationContainer>
);

export default AuthRoutes;
