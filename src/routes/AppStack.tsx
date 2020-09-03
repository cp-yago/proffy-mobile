import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';

const AppStack: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Landing" component={Landing} />
      <Screen name="TeacherList" component={TeacherList} />
    </Navigator>
  </NavigationContainer>
);

export default AppStack;
