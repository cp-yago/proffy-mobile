import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import SignUpSuccess from '../pages/SignUpSuccess';
import Onboarding from '../pages/Onboarding';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const [isOnboardingCompleted, setOnboardingComplete] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('Proffy:IsOnboardCompleted').then((response) => {
      if (response === null) {
        setOnboardingComplete(false);
      } else {
        setOnboardingComplete(true);
      }
    });
  }, [isOnboardingCompleted]);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isOnboardingCompleted && (
          <Screen name="Onboarding" component={Onboarding} />
        )}
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="SignUpSuccess" component={SignUpSuccess} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
