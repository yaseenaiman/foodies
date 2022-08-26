import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useAmiri,
  Amiri_400Regular,
} from "@expo-google-fonts/amiri";
import { useFonts as useAmiriB, Amiri_700Bold } from "@expo-google-fonts/amiri";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
export default function App() {
  const [amiriLoaded] = useAmiri({
    Amiri_400Regular,
  });

  const [amiriLoadedB] = useAmiriB({
    Amiri_700Bold,
  });

  if (!amiriLoaded || !amiriLoadedB) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
