import { createStackNavigator, Text, View } from "../libs";
import { HomeScreen, Screen1, Screen2, Screen3, OpenPackage } from "../Screens";

import { PlayerHeaderStyles } from "../Styles";
import PackageStack from "./PackageStack";

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Inicio"
        component={HomeScreen as any}
        options={{
          header: () => (
            <View style={PlayerHeaderStyles.headerContainer}>
              {/* Primera columna */}
              <View style={PlayerHeaderStyles.firstColumn}>
                <View
                  style={[
                    {
                      borderRadius: 50,
                      backgroundColor: "white",
                      width: 90,
                      height: 90,
                      justifyContent: "center", // Centrar verticalmente
                      alignItems: "center", // Centrar horizontalmente
                    },
                  ]}
                >
                  <Text
                    style={[
                      PlayerHeaderStyles.headerText,
                      { width: 34, color: "black" },
                    ]}
                  >
                    foto
                  </Text>
                </View>
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
      <StackHome.Screen
        name="OpenPackage"
        component={PackageStack}
        options={{ headerShown: false }}
      />
      <StackHome.Screen name="Screen1" component={Screen1} />
      <StackHome.Screen name="Screen2" component={Screen2} />
      <StackHome.Screen name="Screen3" component={Screen3} />
    </StackHome.Navigator>
  );
}
export default HomeStack;
