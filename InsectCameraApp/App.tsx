import { View, StyleSheet, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraView from "./src/Screens/CameraView/CameraView";
import { Ionicons } from "@expo/vector-icons";
import CollectionScreen from "./src/Screens/CollectionScreen/CollectionScreen";
import GroupScreen from "./src/Screens/GroupScreen/GroupScreen";
import ChatGameScreen from "./src/Screens/ChatGameScreen/ChatGameScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import theme from "./config/theme";
// import Constants from "expo-constants";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content" // Cambia el texto a blanco
      />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.secondary,
            height: 80, // Aumenta la altura de la Tab Bar
            paddingTop: 10,
            paddingBottom: 10,
          },

          // Estilo de la barra
          tabBarActiveTintColor: theme.colors.primary, // Color activo
          tabBarInactiveTintColor: theme.colors.white, // Color inactivo
          tabBarItemStyle: {
            // Estilo de los íconos cuando se hace clic
            borderRadius: 30, // Radio del área de toque (circular)
            height: 50,
            paddingTop: 8,
            paddingHorizontal: 30, // Tamaño horizontal de la área de toque
          },
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
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Collections"
          component={CollectionScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraView}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View style={styles.cameraButtonContainer}>
                <Ionicons name="camera" size={54} color={color} />
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
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatGameScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
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
    height: 110, // Altura del header
    backgroundColor: theme.colors.black, // Color de fondo
    alignItems: "center", // Centra el contenido verticalmente
    // paddingTop: Constants.statusBarHeight,
  },
  firstColumn: {
    width: 100, // Ancho fijo de la primera columna
    height: 100, // Altura fija
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black, // Color para distinguir
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
