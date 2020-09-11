import ForgotPassword from '../pages/ForgotPassword';
import GiveClasses from '../pages/GiveClasses';
import Landing from '../pages/Landing';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import StudyTabs from './StudyTabs';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
