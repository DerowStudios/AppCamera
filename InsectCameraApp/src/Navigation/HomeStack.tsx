import theme from "../../config/theme";
import { createStackNavigator, Ionicons, Pressable, Text, View } from "../libs";
import {
  HomeScreen,
  Screen1,
  Screen2,
  Screen3,
  PackageStack,
} from "../Screens";
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
              <View style={[PlayerHeaderStyles.firstColumn]}>
                <View>
                  <View
                    style={[
                      {
                        borderRadius: 50,
                        backgroundColor: "white",
                        width: 90,
                        height: 90,
                        marginLeft: 26,
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
                  <Ionicons
                    style={{
                      position: "absolute",
                      bottom: -5,
                      left: 20,
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      borderRadius: 20,
                    }}
                    name="settings-outline"
                    size={28}
                    color={theme.colors.black}
                  />
                </View>
              </View>
              {/* Segunda columna dividida en dos filas */}
              <View style={PlayerHeaderStyles.secondColumn}>
                <View style={PlayerHeaderStyles.secondRow}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "center",
                      alignItems: "flex-end",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        gap: 4,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="cog-outline"
                        size={24}
                        color={"white"}
                      ></Ionicons>
                      <Text style={PlayerHeaderStyles.headerText}>100</Text>
                    </View>
                    <View
                      style={{
                        gap: 4,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="paw-outline"
                        size={24}
                        color={"white"}
                      ></Ionicons>
                      <Text style={PlayerHeaderStyles.headerText}>13</Text>
                    </View>

                    <View
                      style={{
                        gap: 4,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="heart-circle"
                        size={24}
                        color={"white"}
                      ></Ionicons>
                      <Text style={PlayerHeaderStyles.headerText}>5/5</Text>
                      <Ionicons
                        style={{ marginLeft: -2, marginTop: -8 }}
                        name="add-circle"
                        size={20}
                        color={"blue"}
                      ></Ionicons>
                    </View>
                  </View>
                </View>
                <View style={PlayerHeaderStyles.secondRow}>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 8,
                      marginLeft: 24,
                    }}
                  >
                    <Pressable>
                      <Ionicons
                        name="fish"
                        size={24}
                        color={"white"}
                      ></Ionicons>
                    </Pressable>
                    <Text style={PlayerHeaderStyles.headerText}>1240</Text>
                  </View>
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
