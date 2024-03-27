// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial.js';
import TelaObrigado from './TelaObrigado.js';
import Oliveira from './Oliveira.js';
import TelaScroll from './TelaScroll.js';
import FelizApp from './FelizApp.js';
import Mediano from './Mediano.js';
import TristeApp from './TristeApp.js';
import Joinha from './Joinha.js';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer Screen>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{headerShown: false}}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaObrigado" component={TelaObrigado} />
        <Stack.Screen name="Oliveira" component={Oliveira} />
        <Stack.Screen name="TelaScroll" component={TelaScroll} />
        <Stack.Screen name="FelizApp" component={FelizApp} />
        <Stack.Screen name="Mediano" component={Mediano} />
        <Stack.Screen name="TristeApp" component={TristeApp} />
        <Stack.Screen name="Joinha" component={Joinha} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;