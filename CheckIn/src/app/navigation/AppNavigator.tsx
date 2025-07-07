// src/app/navigation/AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types'; // Importe os tipos de rotas

// Importe suas telas aqui. Elas deverão estar dentro de `src/app/screens/`
// Vamos criar essas telas em seguida.
import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início', headerShown: false }} // Exemplo: Esconder o header na tela inicial
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;