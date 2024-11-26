import { Text, View } from "react-native";
import TitleLayout from "../../Screens/TitleLayout/TitleLayout";
import { Ionicons, useEffect, useState } from "../../libs";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FunctionalStackParams } from "../../../App";
import { ContainerStyles } from "../../Styles";
import { StackNavigationProp } from "@react-navigation/stack";

//para que funcione correctamente: sacar del stack osea de la Pila para que cargue correctamente porque sino queda abierto y el intento de animacion sigue cargand

type ImageCutRouteProp = RouteProp<FunctionalStackParams, "LoadingLayout">;
type CameraOnNavigationProp = StackNavigationProp<
  FunctionalStackParams,
  "LoadingLayout"
>;

const LoadingLayout = () => {
  const [title, setTitle] = useState<string>("load");
  const route = useRoute<ImageCutRouteProp>();

  const { response } = route.params || {};

  const navigate = useNavigation<CameraOnNavigationProp>();
  const timeLoading = () => {
    if (!response) {
      console.error("No se recibió el parámetro 'response'");
      return;
    }
    setTimeout(() => {
      setTitle("Inspeccionando Snap!");
    }, 2000);
    setTimeout(() => {
      setTitle("Observando detalles");
    }, 2000);
    setTimeout(() => {
      setTitle("Preparando Poleenizador");
    }, 2000);
    setTimeout(() => {
      navigate.navigate("PrizeScreen", { response });
    }, 6000);
  };

  useEffect(() => {
    timeLoading();
  }, [title]);
  return (
    <View style={ContainerStyles.container}>
      <TitleLayout title={title}>
        <Ionicons name="home" size={24} color={"green"}></Ionicons>
      </TitleLayout>
    </View>
  );
};
export default LoadingLayout;
