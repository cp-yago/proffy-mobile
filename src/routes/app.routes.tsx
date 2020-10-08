import ForgotPassword from '../pages/ForgotPassword';
import GiveClasses from '../pages/GiveClasses';
import CreateClass from '../pages/CreateClass';
import CreateClassSuccess from '../pages/CreateClassSuccess';
import Landing from '../pages/Landing';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../pages/Profile';
import React from 'react';
import StudyTabs from './StudyTabs';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="CreateClass" component={CreateClass} />
        <Screen name="CreateClassSuccess" component={CreateClassSuccess} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
