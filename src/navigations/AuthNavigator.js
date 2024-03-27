import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens';
import { COLORS, ROUTES } from '../constants';
import Signup from '../screens/auth/Signup';
import SignupScreen from '../screens/auth/Signup';
import DrawerNavigator from './DrawerNavigator';
import FeedBack from '../FeedBack';

const Stack = createStackNavigator();


function AuthNavigator() {

  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      {/* <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      /> */}
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={SignupScreen} />
      <Stack.Screen name={ROUTES.FEEDBACK} component={FeedBack} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
