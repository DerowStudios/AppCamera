import { Pressable, Image, StyleSheet, Alert, View } from "react-native";
import InfoButtons from "./InfoButtons";

const OpenCameraButton = (/*{ onPress }*/) => {
  const onPress = () => {
    Alert.alert("apretaste");
  };
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Image
          source={require("../../../assets/camerabutton2.png")}
          style={styles.image}
        />
      </Pressable>
      <InfoButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  pressed: {
    opacity: 0.7, // Reduce opacidad al presionar
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default OpenCameraButton;
