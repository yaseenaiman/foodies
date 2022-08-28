import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "./src/components/typography/text.components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  useFonts as useChanga,
  Changa_500Medium,
} from "@expo-google-fonts/changa";
import {
  useFonts as useChangaB,
  Changa_700Bold,
} from "@expo-google-fonts/changa";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>الاعدادات</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>الخارطة</Text>
  </SafeArea>
);
export default function App() {
  const [changaLoaded] = useChanga({
    Changa_500Medium,
  });

  const [changaLoadedB] = useChangaB({
    Changa_700Bold,
  });

  if (!changaLoaded || !changaLoadedB) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator initialRoutrName="RestaurantsScreen">
            <Tab.Screen
              name="الاعدادات"
              component={Settings}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="settings"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen name="الخارطة" component={Map} />
            <Tab.Screen name="المطاعم" component={RestaurantsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
