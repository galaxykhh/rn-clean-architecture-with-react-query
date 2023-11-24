import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import MyAppName from './src/MyAppName';
import baseQueryClient from './src/core/network/query-client';
import { theme as lightTheme, darkTheme } from './src/core/styles/theme';
import { ThemeProvider } from '@shopify/restyle';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;
  const navigationTheme = {
      dark: isDarkMode,
      colors: {
          primary: theme.colors.background03,
          background: theme.colors.background00,
          card: theme.colors.background00,
          text: theme.colors.textPrimary,
          border: theme.colors.background00,
          notification: theme.colors.white,
      },
  };

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={baseQueryClient}>
          <NavigationContainer theme={navigationTheme}>
              <MyAppName />
          </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
