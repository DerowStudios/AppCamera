import { View, Button, StyleSheet, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraView from "./src/Components/CameraView";
import cameraIcon from "./cameraico.png";

type RootStackParamList = {
  Home: undefined; // No requiere parámetros
  Camera: undefined; // Tampoco requiere parámetros
};

// Crear el stack navigator y asociarlo con el tipo RootStackParamList
const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#6200EE" }, // Estilo de la barra
          tabBarActiveTintColor: "#fff", // Color activo
          tabBarInactiveTintColor: "#ddd", // Color inactivo
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Camera"
          component={CameraView}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <Image source={cameraIcon} style={styles.icon} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24, // Ajusta el tamaño del icono
    height: 24, // Ajusta el tamaño del icono
  },
});
