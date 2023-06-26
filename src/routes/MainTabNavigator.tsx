import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../components/Icon';
import { ROUTES } from './consts';
import theme from '../theme';
import { Platform } from 'react-native';
import Profile from '../modules/Profile';
import Settings from '../modules/Settings';
import Home from '../modules/Home';
import MovieList from '../modules/Saved';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = '';

          if (route.name === ROUTES.HOME) {
            iconName = 'home';
          } else if (route.name === ROUTES.PROFILE) {
            iconName = 'profile';
          } else if (route.name === ROUTES.SAVED) {
            iconName = 'heart';
          } else if (route.name === ROUTES.SETTINGS) {
            iconName = 'setting';
          }

          return (
            <Icon.SVG name={iconName} size={RFValue(24)} color={color} />
          );
        },
        tabBarLabel: route.name,
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.REGULAR,
          fontSize: RFValue(12),
          marginBottom: RFValue(4),
          marginTop: RFValue(-2)
        },
        tabBarActiveTintColor: theme.COLORS.PRIMARY,
        tabBarInactiveTintColor: theme.COLORS.TEXT,
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? RFValue(86) : RFValue(72)
        }
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.SAVED} component={MovieList} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
