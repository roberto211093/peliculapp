import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppState>
          <StackNavigation />
        </AppState>
      </NavigationContainer>
    </>
  );
};

export default App;
