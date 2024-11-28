import theme from "../../../config/theme";
import { CameraStackParamList } from "../../Navigation/CameraStack";
import { ContainerStyles } from "../../Styles";
import { Alert, Pressable, RouteProp, Text, View } from "../../libs";
import { StyleSheet } from "react-native";

type ImageCutRouteProp = RouteProp<CameraStackParamList, "LoadingLayout">;

const PrizeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: ImageCutRouteProp;
}) => {
  const { response } = route.params || {};
  const handlePrizee = () => {
    // navigation.navigate("PrizeCards");
    navigation.reset({
      index: 0, // Establece el índice a 0 (o el que desees)
      routes: [{ name: "PrizeCards", params: { response } }], // Deja solo la pantalla actual en la pila
    });
    Alert.alert("Prize", "You got a prize!");
  };
  const handleRegister = () => {
    Alert.alert("Register", "Register a bug!");
  };
  return (
    <View style={ContainerStyles.container}>
      <Text>Felicitaciones!</Text>
      <Text>{response}</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text>Registrar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePrizee}>
          <Text>Recompensa</Text>
        </Pressable>
      </View>
      <Text>Toda la info del bicho</Text>
    </View>
  );
};
export default PrizeScreen;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    borderBlockColor: "black",
    padding: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 100,
    maxWidth: 150,
    minWidth: 150,
  },
});
