import theme from "../../../config/theme";
import { CameraStackParamList } from "../../Navigation/CameraStack";
import { ContainerStyles } from "../../Styles";
import { RouteProp, Text, View } from "../../libs";
import { Alert, Pressable, StyleSheet } from "react-native";

type ImageCutRouteProp = RouteProp<CameraStackParamList, "LoadingLayout">;

const PrizeCards = ({
  navigation,
  route,
}: {
  navigation: any;
  route: ImageCutRouteProp;
}) => {
  // const { response } = route.params || {};
  const handlePress = () => {
    Alert.alert("a abrir paquetes");
    navigation.reset({
      index: 0, // Establece el índice a 0 (o el que desees)
      routes: [
        {
          name: "Home",
          params: {
            screen: "OpenPackage", // Indica la pantalla dentro de Home
          },
        },
      ],
    });
  };
  const sobres = 4;

  return (
    <View style={ContainerStyles.container}>
      {sobres > 3 && (
        <Text style={[styles.text, { color: "green" }]}>Excelente!</Text>
      )}
      <Text style={styles.text}>
        Recibiste
        <Text style={{ color: "green" }}>{" " + sobres + " "}</Text>
        {sobres > 1 ? "sobres" : "sobre"}
      </Text>

      <Pressable onPress={handlePress} style={styles.cards}>
        <Text>packete - botton que te regirige a abrir paquetes</Text>
      </Pressable>
    </View>
  );
};
export default PrizeCards;

const styles = StyleSheet.create({
  cards: {
    borderBlockColor: "black",
    padding: 20,
    margin: 20,
    backgroundColor: theme.colors.gray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 320,
    maxWidth: 300,
    minWidth: 160,
    width: 220,
  },
  text: {
    fontSize: 18,
    fontFamily: "Ribeye-Regular",
  },
});
