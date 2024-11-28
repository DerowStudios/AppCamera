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
      routes: [{ name: "OpenPackage" }],
    });
    // navigation.navigate("OpenPackage");
  };
  return (
    <View style={ContainerStyles.container}>
      <Text>Has recibido!</Text>

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
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 300,
    maxWidth: 300,
    minWidth: 300,
  },
});
