import theme from "../../../config/theme";
import { CameraStackParamList } from "../../Navigation/CameraStack";
import { ContainerStyles } from "../../Styles";
import { RouteProp, Text, useEffect, View } from "../../libs";
import { BackHandler, Pressable, StyleSheet } from "react-native";

type ImageCutRouteProp = RouteProp<CameraStackParamList, "LoadingLayout">;

const OpenPackage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: ImageCutRouteProp;
}) => {
  useEffect(() => {
    const handleBackPress = () => {
      // Navegar a la pantalla "Home"
      navigation.navigate("TabNavigation");
      return true; // Evita que el evento predeterminado de Android cierre la aplicación
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    // Limpieza al desmontar el componente
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [navigation]);
  const handleRedirect = () => {
    navigation.navigate("Inicio");
  };
  return (
    <View style={ContainerStyles.container}>
      <View style={styles.cards}>
        <Text>Aca van las cards</Text>
      </View>
      {/* <Pressable onPress={handleRedirect}>
        <Text style={{ padding: 20, backgroundColor: "black", color: "white" }}>
          Go Home
        </Text>
      </Pressable> */}
    </View>
  );
};
export default OpenPackage;

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
