import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatGameScreen, CollectionScreen, GroupScreen } from "../Screens";
import { Ionicons, View } from "../libs";
import { CameraButtonMenu } from "../Styles";
import HomeStack from "./HomeStack";
import theme from "../../config/theme";
import CaptureStack from "./CatureStack";

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
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
        component={CaptureStack}
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
  );
}

export default TabNavigation;
