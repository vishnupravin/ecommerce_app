import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS, ROUTES } from '../constants';
import { Wallet, Notifications } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import ContactScreen from '../../componentsScreen/ContactScreen';
import LogOutScreen from '../../componentsScreen/LogOutScreen';
import PrivacyPolicyScreen from '../../componentsScreen/PrivacyPolicyScreen';
import TermConditionScreen from '../../componentsScreen/TermConditionScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.CONTACT}
        component={ContactScreen}
        options={{
          headerShown: 'true',
          title: 'Contact',
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.PRIVACY}
        component={PrivacyPolicyScreen}
        options={{
          headerShown: 'true',
          title: 'Privacy',
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.TERM}
        component={TermConditionScreen}
        options={{
          headerShown: 'true',
          title: 'TermCondition',
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />


      <Drawer.Screen
        name={ROUTES.LOGOUT}
        component={LogOutScreen}
        options={{
          headerShown: 'true',
          title: 'Logout',
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
