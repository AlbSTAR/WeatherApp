import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          },
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
