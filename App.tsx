import React, { useCallback, useEffect } from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from './src/view/Login';
import { PRIMARY_ACCENT } from './src/util/Constants';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: PRIMARY_ACCENT,
  },
};

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
    {
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'YTL'
        }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    }
  </NavigationContainer>
  );
}
