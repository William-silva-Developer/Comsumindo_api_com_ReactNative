import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';


import Route from './src/routes/Route';



export default function App() {
  return (
    
      <NavigationContainer>
        <StatusBar  style='auto'/>
    
        <Route />
        

      </NavigationContainer>
    
  );
};