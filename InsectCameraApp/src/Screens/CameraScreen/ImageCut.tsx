import { Alert, Button, Image, Text, View } from "react-native";
import { FunctionalStackParams, RootStackParamList } from "../../../App";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import { useEffect, useState } from "react";
import { CameraScreen, ContainerStyles } from "../../Styles";
import { StackNavigationProp } from "@react-navigation/stack";

type ImageCutRouteProp = RouteProp<RootStackParamList, "ImageCut">;
type CameraOnNavigationProp = StackNavigationProp<
  FunctionalStackParams,
  "LoadingLayout"
>;
const ImageCut = () => {
  const route = useRoute<ImageCutRouteProp>();
  const navigate = useNavigation<CameraOnNavigationProp>();
  const { selectedImage } = route.params;
  const [predicted, setPredicted] = useState<string | null>(null);
  const [imageDetails, setImageDetails] = useState<any>(null); // Para almacenar las características de la imagen
  type ImagePickerResult = {
    uri: string;
    type: string;
    name: string;
  };
  const showImageDetails = async (uri: string) => {
    try {
      // Obtener las dimensiones de la imagen
      const { width, height } = await ImageManipulator.manipulateAsync(
        uri,
        [],
        {},
      );

      // Obtener el tamaño en bytes
      const fileInfo = await FileSystem.getInfoAsync(uri);
      let sizeInBytes = 0;
      if (!!fileInfo.size) {
        console.log("esta", fileInfo.size);
        sizeInBytes = fileInfo.size / 1024;
      }

      // Calcular la resolución en ppi estimada
      const resolutionX = width / 25.4; // Calculando PPI horizontal
      const resolutionY = height / 25.4; // Calculando PPI vertical

      // Actualizar el estado con las características de la imagen
      setImageDetails({
        width,
        height,
        sizeInBytes,
        resolutionX,
        resolutionY,
      });

      // Mostrar las características en la consola
      console.log("Características de la imagen:");
      console.log(`Dimensiones: ${width}x${height}`);

      console.log(`Tamaño: ${sizeInBytes / 1024} KB`);
      console.log(`Resolución Horizontal: ${resolutionX} ppi`);
      console.log(`Resolución Vertical: ${resolutionY} ppi`);
    } catch (error) {
      console.error("Error al obtener detalles de la imagen", error);
    }
  };
  const uploadImage = async () => {
    if (!selectedImage) {
      Alert.alert("Error", "Primero selecciona o toma una imagen.");
      return;
    }

    //PROBAR BAJAR RESOLUCION Y SUBIR CONTRASTE
    //BORRAR METADATA CON METADATA REACT-NATIVE IMAGE.

    // Redimensionar la imagen
    const resizedImage = await ImageManipulator.manipulateAsync(
      selectedImage,
      [{ resize: { width: 130, height: 224 } }],
      {
        format: ImageManipulator.SaveFormat.JPEG,
      },
    );

    showImageDetails(resizedImage.uri);
    const formData = new FormData();
    const image: ImagePickerResult = {
      uri: resizedImage.uri,
      type: "image/jpeg",
      name: "image.jpg",
    };
    formData.append("image", image as any);
    console.log("esteForm", formData);
    try {
      const response = await axios.post(
        "http://192.168.0.21:3000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setPredicted(response.data[0].class);
      Alert.alert("Éxito", "Imagen subida correctamente");
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      Alert.alert("Error", "No se pudo subir la imagen");
      console.error(error);
    }
  };
  useEffect(() => {
    const response = predicted;
    navigate.navigate("LoadingLayout", { response });
  }, [predicted]);
  return (
    <View style={ContainerStyles.container}>
      <Text>Esta view es cameracut</Text>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button
        title="Subir imagen"
        onPress={uploadImage}
        disabled={!selectedImage}
      />

      {imageDetails && (
        <View style={CameraScreen.detailsContainer}>
          <Text>
            Dimensiones: {imageDetails.width}x{imageDetails.height}
          </Text>
          <Text>Tamaño: {(imageDetails.sizeInBytes / 1024).toFixed(2)} KB</Text>
          <Text>
            Resolución Horizontal: {imageDetails.resolutionX.toFixed(2)} ppi
          </Text>
          <Text>
            Resolución Vertical: {imageDetails.resolutionY.toFixed(2)} ppi
          </Text>
        </View>
      )}
      {predicted && <Text>{predicted}</Text>}
    </View>
  );
};

export default ImageCut;
