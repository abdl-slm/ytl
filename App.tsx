import React, { useCallback, useEffect } from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from './src/view/Login';
import { PRIMARY_ACCENT } from './src/util/Constants';
import { TransactionHistory } from './src/view/TransactionHistory';
import { TransactionDetail } from './src/view/TransactionDetail';
import { DETAIL, HISTORY, LOGIN } from './src/util/Routes';

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
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={HISTORY} component={TransactionHistory} />
        <Stack.Screen name={DETAIL} component={TransactionDetail} />
      </Stack.Navigator>
    }
  </NavigationContainer>
  );
}
