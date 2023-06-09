import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingScreen} from '@src/screens/Setting';
import {ScreensName, SettingStackScreensParams} from '../types';
import {BASE_URL_APP} from '@env';

const SettingStack = createNativeStackNavigator<SettingStackScreensParams>();

interface SettingRoute {
  name: typeof ScreensName.SettingScreen;
  component: typeof SettingScreen;
}
const Setting: SettingRoute[] = [
  {
    name: ScreensName.SettingScreen,
    component: SettingScreen,
  },
];

const SettingRoute = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {Setting.map(item => (
        <SettingStack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </SettingStack.Navigator>
  );
};

export {SettingRoute};
