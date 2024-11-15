import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraView from "./src/Screens/CameraView/CameraView";
import { Ionicons } from "@expo/vector-icons";
import CollectionScreen from "./src/Screens/CollectionScreen/CollectionScreen";
import GroupScreen from "./src/Screens/GroupScreen/GroupScreen";
import ChatGameScreen from "./src/Screens/ChatGameScreen/ChatGameScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import theme from "./config/theme";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
            height: 80, // Aumenta la altura de la Tab Bar
            paddingTop: 20,
          },
          // Estilo de la barra
          tabBarActiveTintColor: theme.colors.secondary, // Color activo
          tabBarInactiveTintColor: theme.colors.white, // Color inactivo
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => (
              <View style={styles.headerContainer}>
                {/* Primera columna */}
                <View style={styles.firstColumn}>
                  <Text style={styles.headerText}>Logo</Text>
                </View>
                {/* Segunda columna dividida en dos filas */}
                <View style={styles.secondColumn}>
                  <View style={styles.secondRow}>
                    <Text style={styles.headerText}>Fila 1</Text>
                  </View>
                  <View style={styles.secondRow}>
                    <Text style={styles.headerText}>Fila 2</Text>
                  </View>
                </View>
              </View>
            ),
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="camera" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Collections"
          component={CollectionScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="camera" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraView}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <View style={styles.cameraButtonContainer}>
                <Ionicons name="camera" size={54} color="white" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Group"
          component={GroupScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="camera" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatGameScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="camera" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24, // Ajusta el tamaño del icono
    height: 24, // Ajusta el tamaño del icono
  },
  cameraButtonContainer: {
    width: 90, // Ancho más grande
    height: 90, // Alto más grande
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary, // O cualquier color que combine
    borderRadius: 50, // Borde redondeado 50% del tamaño
    borderWidth: 2, // Añadir borde si es necesario
    borderColor: theme.colors.white, // Borde blanco (opcional)
    marginBottom: 10, // Para que sobresalga un poco de la barra de navegación
    shadowColor: theme.colors.black, // Sombra para un efecto flotante
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  headerContainer: {
    flexDirection: "row", // Hace que los hijos estén en columnas
    height: 100, // Altura del header
    backgroundColor: "#6200EE", // Color de fondo
    alignItems: "center", // Centra el contenido verticalmente
  },
  firstColumn: {
    width: 100, // Ancho fijo de la primera columna
    height: 100, // Altura fija
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3700B3", // Color para distinguir
  },
  secondColumn: {
    flex: 1, // Ocupa el resto del espacio
    flexDirection: "column", // Divide en filas
  },
  secondRow: {
    flex: 1, // Las filas ocupan partes iguales
    justifyContent: "center",
    alignItems: "flex-start", // Ajusta contenido al inicio
    paddingLeft: 10, // Separación interna
  },
  headerText: {
    color: "#fff", // Texto blanco
    fontSize: 18, // Tamaño de texto
    fontWeight: "bold", // Negrita
  },
});
