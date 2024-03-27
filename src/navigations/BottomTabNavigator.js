import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { COLORS, ROUTES } from '../constants';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import { useNavigation } from '@react-navigation/native';
import HomePage from '../Homescreen';
import FeedBack from '../FeedBack';
import Contact from '../Categroies';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Profile from '../Profile';
import Categorie from '../Categroies';
import CartScreen from '../CartScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === ROUTES.PRIVACY) {
            iconName = focused ? 'lock' : 'lock-outline';
          } else if (route.name === ROUTES.CONTACT) {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Icon1 name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomePage}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.CATEGORIE}
        component={Categorie}
        options={{
          headerShown: 'true',
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.CARTPAGE}
        component={CartScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
