import {
  View,
  Text,
  StatusBar,
  NavigationContainer,
  createBottomTabNavigator,
  createStackNavigator,
  Ionicons,
} from "./src/libs";
import {
  CameraView,
  CollectionScreen,
  GroupScreen,
  ChatGameScreen,
  HomeScreen,
} from "./src/Screens";
import theme from "./config/theme";

import {
  PlayerHeaderStyles,
  CameraButtonMenu,
  LateralMenu,
} from "./src/Styles";
// import Constants from "expo-constants";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Pantallas para cada botón
const Screen1 = () => (
  <View style={LateralMenu.screenDisplay}>
    <Text>Pantalla 1</Text>
  </View>
);
const Screen2 = () => (
  <View style={LateralMenu.screenDisplay}>
    <Text>Pantalla 2</Text>
  </View>
);
const Screen3 = () => (
  <View style={LateralMenu.screenDisplay}>
    <Text>Pantalla 3</Text>
  </View>
);
const Screen4 = () => (
  <View style={LateralMenu.screenDisplay}>
    <Text>Pantalla 4</Text>
  </View>
);

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={HomeScreen as any}
        options={{
          header: () => (
            <View style={PlayerHeaderStyles.headerContainer}>
              {/* Primera columna */}
              <View style={PlayerHeaderStyles.firstColumn}>
                <Text style={PlayerHeaderStyles.headerText}>Logo</Text>
              </View>
              {/* Segunda columna dividida en dos filas */}
              <View style={PlayerHeaderStyles.secondColumn}>
                <View style={PlayerHeaderStyles.secondRow}>
                  <Text style={PlayerHeaderStyles.headerText}>Fila 1</Text>
                </View>
                <View style={PlayerHeaderStyles.secondRow}>
                  <Text style={PlayerHeaderStyles.headerText}>Fila 2</Text>
                </View>
              </View>
            </View>
          ),
          // headerShown: false,
        }}
      />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  );
}

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
          component={HomeStack}
          options={{
            tabBarLabel: "",
            headerShown: false,
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
              <View style={CameraButtonMenu.cameraButtonContainer}>
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
