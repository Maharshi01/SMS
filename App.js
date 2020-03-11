import React from 'react';
// import AppNavigator from '../SMS/components/AppNavigator';
// import Campaigns from './components/Campaigns';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/AppNavigator';


const App =()=> {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
 
}

export default App;