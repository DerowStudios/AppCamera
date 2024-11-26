import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import AppNavigation from "./src/Navigation/AppNavigation";

// Evita que la pantalla de inicio desaparezca automáticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Ribeye-Regular": require("./assets/fonts/Ribeye-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Renderiza un contenedor vacío mientras las fuentes cargan
  if (!fontsLoaded) {
    return null;
  }
  return <AppNavigation />;
}
