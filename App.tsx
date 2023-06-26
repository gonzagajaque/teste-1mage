import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import theme from './src/theme';
import { AuthProvider } from './src/contexts/Auth';
import AppRoutes from './src/routes/routes';

const App = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;