import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { ContainerStyles, CameraScreen } from "../../Styles";
import {
  useState,
  View,
  Button,
  Image,
  Alert,
  Text,
  useEffect,
} from "../../libs";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigation/CatureStack";
import { StackNavigationProp } from "@react-navigation/stack";

type ImagePickerResult = {
  uri: string;
  type: string;
  name: string;
};
type CameraOnNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ImageCut"
>;
const CameraOn = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [predicted, setPredicted] = useState<string | null>(null);
  const [imageDetails, setImageDetails] = useState<any>(null); // Para almacenar las características de la imagen
  const navigation = useNavigation<CameraOnNavigationProp>();
  const handleNavigation = () => {
    if (selectedImage) {
      navigation.navigate("ImageCut", { selectedImage });
    } else {
      Alert.alert("Error", "No se ha seleccionado ninguna imagen.");
    }
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Metadata EXIF:", result.assets[0].exif);
      setSelectedImage(result.assets[0].uri);
      await showImageDetails(result.assets[0].uri); // Obtener detalles de la imagen seleccionada
    }
  };

  // Función para tomar una foto con la cámara
  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permisos necesarios",
        "Necesitas otorgar permisos para acceder a la cámara.",
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Metadata EXIF:", result.assets[0]);
      setSelectedImage(result.assets[0].uri);
      await showImageDetails(result.assets[0].uri); // Obtener detalles de la imagen tomada
    }
  };
  useEffect(() => {
    takePhoto();
  }, []);

  // Función para mostrar las características de la imagen
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

  // Función para subir la imagen al servidor
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
  return (
    <View style={ContainerStyles.container}>
      <Button title="Seleccionar imagen" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={CameraScreen.image} />
      )}
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
      <Button
        title="Subir imagen"
        onPress={uploadImage}
        disabled={!selectedImage}
      />
      {predicted && <Text>{predicted}</Text>}
      <Button
        title="Next"
        onPress={handleNavigation}
        disabled={!selectedImage}
      />
    </View>
  );
};

export default CameraOn;
