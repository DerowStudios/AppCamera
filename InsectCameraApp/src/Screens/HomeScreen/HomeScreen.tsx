import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ContainerStyles } from "../../Styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
// Crear el stack navigator y asociarlo con el tipo RootStackParamList
// const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined; // No requiere parámetros
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};
type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home" | "Screen1" | "Screen2" | "Screen3" | "Screen4"
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
          style={styles.menuButton}
          onPress={() => navigation.navigate("Screen1")}
        >
          <Text style={styles.menuText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Screen2")}
        >
          <Text style={styles.menuText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Screen3")}
        >
          <Text style={styles.menuText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Screen4")}
        >
          <Text style={styles.menuText}>4</Text>
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
