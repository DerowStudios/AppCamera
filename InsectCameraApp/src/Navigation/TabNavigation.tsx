import { ChatGameScreen, CollectionScreen, GroupScreen } from "../Screens";
import {
  Ionicons,
  View,
  createBottomTabNavigator,
  useEffect,
  useState,
} from "../libs";
import { CameraButtonMenu } from "../Styles";
import HomeStack from "./HomeStack";
import theme from "../../config/theme";
import CameraStack from "./CameraStack";
import { Keyboard } from "react-native";
import CollectionNav from "./CollectionStack";

const Tab = createBottomTabNavigator();
function TabNavigation() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: keyboardVisible ? "none" : "flex",
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
        component={CollectionNav}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="albums" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View style={CameraButtonMenu.cameraButtonContainer}>
              <Ionicons name="camera" size={50} color={color} />
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
            <Ionicons name="people" size={24} color={color} />
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
            <Ionicons name="game-controller" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
