import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {typeNavigationStacks} from './Models/types-navigation';

import Home from '../screens/home/home';
import AddCompany from '../screens/add-company/add-company';

const Stack = createNativeStackNavigator<typeNavigationStacks>();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            <Stack.Screen
                name="AddCompany"
                component={AddCompany}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
      </NavigationContainer>
    );
  }
}