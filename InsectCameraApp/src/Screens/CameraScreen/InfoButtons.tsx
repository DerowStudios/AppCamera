import { Pressable, Image, StyleSheet, Alert, View } from "react-native";
import { Ionicons } from "../../libs";
import theme from "../../../config/theme";
import { Shadow } from "react-native-shadow-2";

const InfoButtons = (/*{ onPress }*/) => {
  const onPress = () => {
    Alert.alert("apretaste");
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.icon, pressed && styles.pressed]}
      >
        {/* <Shadow distance={5} startColor={"#00000015"}> */}
        <Ionicons name="information-circle" style={styles.IconImage} />
        {/* </Shadow> */}
      </Pressable>

      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.icon, pressed && styles.pressed]}
      >
        {/* <Shadow distance={5} startColor={"#00000015"}> */}
        <Ionicons name="warning" style={[styles.IconImage, styles.iconAlert]} />
        {/* </Shadow> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 250,
    alignItems: "flex-end",
    gap: 5,
    padding: 3,
    paddingTop: 20,
  },
  IconImage: {
    color: "orange",
    fontSize: 40,
    // backgroundColor: theme.colors.gray,
    borderRadius: 50,
  },

  pressed: {
    opacity: 0.7, // Reduce opacidad al presionar
  },
  icon: {
    borderRadius: 50,
  },
  iconAlert: {
    color: theme.colors.secondary,
  },
});

export default InfoButtons;
