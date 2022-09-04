import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import {
  useFonts as useChanga,
  Changa_500Medium,
} from "@expo-google-fonts/changa";
import {
  useFonts as useChangaB,
  Changa_700Bold,
} from "@expo-google-fonts/changa";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyBw57HB-LOOYY4GfM8GnzPEKS6LeoscOn0",
  authDomain: "foody-b06dc.firebaseapp.com",
  projectId: "foody-b06dc",
  storageBucket: "foody-b06dc.appspot.com",
  messagingSenderId: "14316139209",
  appId: "1:14316139209:web:93a007783f4b6923941318",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { auth, db };

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
