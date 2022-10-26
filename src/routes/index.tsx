import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Maps from '../screens/Maps';

import IconHome from '../assets/icons/IconHome.svg';
import IconMaps from '../assets/icons/IconMaps.svg';
import IconFavorite from '../assets/icons/IconFavorite.svg';

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            console.log(focused);
            return (
              <IconHome
                width={50}
                height={25}
                fill={focused ? '#727272' : '#C9C9C9'}
              />
            );
          },
          tabBarShowLabel: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconMaps
                width={100}
                height={32}
                fill={focused ? '#727272' : '#C9C9C9'}
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconFavorite
                width={80}
                height={25}
                fill={focused ? '#727272' : '#C9C9C9'}
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

function Routes() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}

export default Routes;
