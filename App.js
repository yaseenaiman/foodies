import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "./src/components/typography/text.components";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

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
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  المطاعم: "md-restaurant",
  الموقع: "md-map",
  الاعدادات: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Settings = () => (
  <SafeArea>
    <Text>الاعدادات</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>الموقع</Text>
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
          <Tab.Navigator
            initialRouteName="المطاعم"
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
              labelStyle: {
                fontFamily: "Changa_500Medium",
              },
            }}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name="الاعدادات"
              component={Settings}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="الموقع"
              component={Map}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="المطاعم"
              component={RestaurantsScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
