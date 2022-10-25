import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './app/navigation/Navigation';
import {AuthProvider} from './app/providers/AuthProvider';
import {ThemeProvider} from './app/providers/ThemeProvider';

export const App: FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
