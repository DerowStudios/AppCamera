import { Pressable, Image, StyleSheet, Alert, View } from "react-native";
import { Ionicons } from "../../libs";

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
        <Ionicons name="information-circle" style={styles.IconImage} />
      </Pressable>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.icon,
          styles.iconAlert,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons name="warning" style={[styles.IconImage, styles.iconAlert]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 250,
    alignItems: "flex-end",
    gap: 3,
  },
  IconImage: {
    color: "gray",
    fontSize: 40,
  },

  pressed: {
    opacity: 0.7, // Reduce opacidad al presionar
  },
  icon: {},
  iconAlert: {
    color: "red",
  },
});

export default InfoButtons;
