import { Pressable, Image, StyleSheet, Alert, View } from "react-native";
import InfoButtons from "./InfoButtons";
import * as ImagePicker from "expo-image-picker";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "../../libs";
import theme from "../../../config/theme";
const OpenCameraButton = (/*{ onPress }*/) => {
  const navigation = useNavigation();

  const onPress = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted || !cameraPermission.granted) {
      Alert.alert(
        "Permisos necesarios",
        "Necesitas otorgar permisos para acceder a tus fotos."
      );
      return;
    }

    navigation.navigate("CameraOn" as never);
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          { justifyContent: "flex-start", alignItems: "center" },
          pressed && styles.pressed,
        ]}
      >
        {/* <Shadow distance={8} startColor={"#00000015"}> */}
        {/* <Image
            source={require("../../../assets/camerabutton4.png")}
            style={styles.image}
          /> */}
        <Ionicons name="camera" color={theme.colors.primary} size={200} />
        {/* </Shadow> */}
      </Pressable>
      <InfoButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    marginTop: -20,
    borderRadius: 250,
  },
  pressed: {
    opacity: 0.7, // Reduce opacidad al presionar
  },
  image: {
    borderRadius: 255,
    width: 250,
    height: 250,
  },
});

export default OpenCameraButton;
