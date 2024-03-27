import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SQl from './src/Sql';
import SplashScreen from './src/SplashScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigations/AuthNavigator';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="DrawerNavigate" component={DrawerNavigate} />
      </Stack.Navigator> */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
