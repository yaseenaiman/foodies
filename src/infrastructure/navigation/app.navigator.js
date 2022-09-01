import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../components/typography/text.components";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";

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
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarLabelStyle: {
      fontFamily: "Changa_500Medium",
    },
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
export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="المطاعم"
      screenOptions={createScreenOptions}
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
        component={RestaurantsNavigator}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
