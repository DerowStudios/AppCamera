import { createStackNavigator, Text, View } from "../libs";
import { HomeScreen, Screen1, Screen2, Screen3, OpenPackage } from "../Screens";

import { PlayerHeaderStyles } from "../Styles";

const StackPackage = createStackNavigator();

function PackageStack() {
  return (
    <StackPackage.Navigator>
      <StackPackage.Screen
        name="Inicio"
        component={OpenPackage as any}
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

      <StackPackage.Screen name="Screen1" component={Screen1} />
      <StackPackage.Screen name="Screen2" component={Screen2} />
      <StackPackage.Screen name="Screen3" component={Screen3} />
    </StackPackage.Navigator>
  );
}
export default PackageStack;
