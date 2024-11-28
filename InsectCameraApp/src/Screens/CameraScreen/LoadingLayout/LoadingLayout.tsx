import React, { useEffect, useRef, useState } from "react";
import TitleLayout from "../../../Components/TitleLayout/TitleLayout";
import { CameraStackParamList } from "../../../Navigation/CameraStack";
import { ContainerStyles } from "../../../Styles";
import {
  View,
  Ionicons,
  RouteProp,
  StackNavigationProp,
  Text,
} from "../../../libs";
import { BackHandler } from "react-native";

type ImageCutRouteProp = RouteProp<CameraStackParamList, "LoadingLayout">;
type CameraOnNavigationProp = StackNavigationProp<
  CameraStackParamList,
  "LoadingLayout"
>;

const LoadingLayout = ({
  navigation,
  route,
}: {
  navigation: CameraOnNavigationProp;
  route: ImageCutRouteProp;
}) => {
  const [title, setTitle] = useState<string>("Evaluando Átomos");
  const { response } = route.params || {};
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (!response) {
      console.error("No se recibió el parámetro 'response'");
      return;
    }

    // Agregar temporizadores al array para su limpieza
    timeoutsRef.current.push(
      setTimeout(() => setTitle("Inspeccionando Snap!"), 2000),
      setTimeout(() => setTitle("Observando detalles"), 4000),
      setTimeout(() => setTitle("Preparando Poleenizador"), 6000),
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "PrizeScreen", params: { response } }],
        });
      }, 8000),
    );

    // Limpieza de temporizadores al desmontar
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [navigation, response]);

  return (
    <View style={ContainerStyles.container}>
      <TitleLayout title={title}>
        <View style={ContainerStyles.container}>
          <Text>icon</Text>
          <Ionicons name="home" size={24} color={"green"} />
        </View>
      </TitleLayout>
    </View>
  );
};

export default LoadingLayout;
