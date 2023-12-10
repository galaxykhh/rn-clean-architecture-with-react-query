import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { onlineManager } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { reactQueryPersister } from '@core/utils/react-query-persister';
import MyAppName from './src/MyAppName';
import baseQueryClient from './src/core/network/query-client';
import { theme as lightTheme, darkTheme } from './src/core/styles/theme';

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

  useEffect(() => {
    return NetInfo.addEventListener(state => {
        onlineManager.setOnline(state.isConnected ?? false);
    });
}, []);

  return (
    <ThemeProvider theme={theme}>
      <PersistQueryClientProvider
        client={baseQueryClient}
        persistOptions={{ persister: reactQueryPersister, maxAge: Infinity }}>
          <NavigationContainer theme={navigationTheme}>
              <MyAppName />
          </NavigationContainer>
      </PersistQueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
