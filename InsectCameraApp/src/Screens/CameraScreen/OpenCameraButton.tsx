import { Pressable, Image, StyleSheet, Alert, View } from "react-native";
import InfoButtons from "./InfoButtons";
import { Shadow } from "react-native-shadow-2";
const OpenCameraButton = (/*{ onPress }*/) => {
  const onPress = () => {
    Alert.alert("apretaste");
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Shadow distance={8} startColor={"#00000015"}>
          <Image
            source={require("../../../assets/camerabutton4.png")}
            style={styles.image}
          />
        </Shadow>
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
