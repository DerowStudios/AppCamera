import { createStackNavigator, Text, View } from "../libs";
import { HomeScreen, Screen1, Screen2, Screen3, OpenPackage } from "../Screens";

import { PlayerHeaderStyles } from "../Styles";

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
      <StackHome.Screen name="OpenPackage" component={OpenPackage} />
      <StackHome.Screen name="Screen1" component={Screen1} />
      <StackHome.Screen name="Screen2" component={Screen2} />
      <StackHome.Screen name="Screen3" component={Screen3} />
    </StackHome.Navigator>
  );
}
export default HomeStack;
