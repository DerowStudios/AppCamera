import { Text, View } from "react-native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ContainerStyles from "../../Styles/ContainerStyles";
// import { createStackNavigator } from "@react-navigation/stack";
// Crear el stack navigator y asociarlo con el tipo RootStackParamList
// const Stack = createStackNavigator<RootStackParamList>();

// type RootStackParamList = {
//   Home: undefined; // No requiere parámetros
// };
// type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
// //stack Navigation.
//function HomeScreen({ navigation }: HomeScreenProps) {
function HomeScreen() {
  return (
    <View style={ContainerStyles.container}>
      <Text>Hola mundo</Text>
    </View>
  );
}

export default HomeScreen;
