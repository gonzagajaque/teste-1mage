import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './consts';
import { Login, SignIn } from '../modules/Auth';

const Stack = createStackNavigator();

const AuthScreens = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.SIGNIN} component={SignIn} />
      </Stack.Navigator>
  );
};

export default AuthScreens;
