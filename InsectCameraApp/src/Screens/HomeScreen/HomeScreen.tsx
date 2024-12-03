import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ContainerStyles } from "../../Styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "../../libs";
import theme from "../../../config/theme";
// Crear el stack navigator y asociarlo con el tipo RootStackParamList
// const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined; // No requiere parámetros
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  OpenPackage: undefined;
};
type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home" | "Screen1" | "Screen2" | "Screen3" | "OpenPackage"
>;
// //stack Navigation.
//function HomeScreen({ navigation }: HomeScreenProps) {

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={ContainerStyles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>

      {/* Menú lateral flotante */}
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: "transparent" }]}
          onPress={() => navigation.navigate("Screen1")}
        >
          <Ionicons name="globe" color={"green"} size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            (styles.menuButton,
            {
              backgroundColor: "transparent",
              marginLeft: 6,
              marginVertical: 10,
            })
          }
          onPress={() => navigation.navigate("Screen2")}
        >
          <Ionicons name="storefront" color={"red"} size={38} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: "transparent" }]}
          onPress={() => navigation.navigate("OpenPackage")}
        >
          <Ionicons name="gift" color={theme.colors.secondary} size={40} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: "transparent" }]}
          onPress={() => navigation.navigate("Screen3")}
        >
          <Ionicons name="aperture" color={"orangered"} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menu: {
    position: "absolute",
    right: 10,
    top: 50,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 200,
  },
  menuButton: {
    width: 50,
    height: 50,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 5,
  },
  menuText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
