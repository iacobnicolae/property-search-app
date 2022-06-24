import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { setupStore } from './src/store/store';
import { Provider } from 'react-redux';

import Home from "./src/screens/Home";
import ResultSearch from "./src/screens/ResultSearch";
import ContentPage from "./src/screens/ContentPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={setupStore()}>
          <NavigationContainer>
              <Stack.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                      headerShown: false
                  }}>
                  <Stack.Screen
                      name="Home"
                      component={Home}
                  />
                  <Stack.Screen name="ResultSearch"
                                component={ResultSearch}
                  />
                  <Stack.Screen name="ContentPage"
                                component={ContentPage}
                  />
              </Stack.Navigator>
          </NavigationContainer>
    </Provider>
  );
}
