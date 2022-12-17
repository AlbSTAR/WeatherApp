import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#0e1529'},
        }}
        sceneContainerStyle={{backgroundColor: '#fff'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="home" color={color} size={29} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="users-cog" color={color} size={29} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;
