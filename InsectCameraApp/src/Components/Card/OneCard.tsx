import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "../../libs";
import bee from "./bee.png";

const OneCard = () => {
  return (
    <ImageBackground
      source={bee}
      style={styles.card}
      imageStyle={styles.imageBackground} // Personaliza la imagen (opcional)
    >
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            width: 36,
            height: 36,
            fontFamily: "Ribeye-Regular",
            borderRadius: 50,
            backgroundColor: "rgba(217, 217, 217, 0.5)",
            color: "white",
            fontSize: 18,
          }}
        >
          00
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            maxWidth: 150,
            color: "white",
            textAlign: "center",
            fontFamily: "Ribeye-Regular",
          }}
        >
          Abeja Obrera
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          <Ionicons
            style={{
              borderRadius: 8,
              backgroundColor: "rgba(217, 217, 217, 0.5)",
              padding: 2,
            }}
            name="information-circle"
            color={"blue"}
            size={30}
          />
          <Ionicons
            style={{
              borderRadius: 8,
              backgroundColor: "rgba(217, 217, 217, 0.5)",
              padding: 2,
            }}
            name="leaf-outline"
            color={"green"}
            size={30}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OneCard;

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 360,
    borderWidth: 6,
    borderRadius: 5,
    borderColor: "white",
    padding: 10,
    justifyContent: "space-between",
    overflow: "hidden", // Necesario para que el borde redondeado funcione con la imagen
  },
  imageBackground: {
    width: 268,
    height: 349,
    resizeMode: "cover",
    borderRadius: 6, // Aplica el borde redondeado a la imagen
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
});
