import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingPage from './src/screens/LandingPage';
import UniversityList from './src/screens/UniversityList';
import Details from './src/screens/Details';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="LandingPage"
          // We hide the default header to maintain that clean, custom look from the website
          screenOptions={{ headerShown: false }} 
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="UniversityList" component={UniversityList} />
          <Stack.Screen name="Details" component={Details} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
