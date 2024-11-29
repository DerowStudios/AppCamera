import theme from "../../../config/theme";
import { CameraStackParamList } from "../../Navigation/CameraStack";
import { ContainerStyles } from "../../Styles";
import { RouteProp, Text, useEffect, useState, View } from "../../libs";
import { BackHandler, FlatList, Pressable, StyleSheet } from "react-native";

type ImageCutRouteProp = RouteProp<CameraStackParamList, "LoadingLayout">;

const OpenPackage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: ImageCutRouteProp;
}) => {
  const [selectedPackage, setSelectedPackage] = useState<number>(0);
  const paquetes = [
    "Paquete 1",
    "Paquete 2",
    "Paquete 3",
    "Paquete 4",
    "Paquete 5",
    "Paquete 6",
    "Paquete 7",
    "Paquete 8",
    "Paquete 9",
    "Paquete 10",
    "Paquete 11",
    "Paquete 12",
    "Paquete 13",
    "Paquete 14",
    "Paquete 15",
    "Paquete 16",
    "Paquete 17",
    "Paquete 18",
    "Paquete 19",
    "Paquete 20",
  ];
  useEffect(() => {
    const handleBackPress = () => {
      // Navegar a la pantalla "Home"
      navigation.navigate("TabNavigation");
      return true; // Evita que el evento predeterminado de Android cierre la aplicación
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    // Limpieza al desmontar el componente
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [navigation]);
  const handleRedirect = () => {
    navigation.navigate("Inicio");
  };

  return (
    <View style={ContainerStyles.container}>
      <View style={styles.list}>
        <FlatList
          data={paquetes}
          renderItem={({ item, index }) => (
            <Pressable
              style={[
                styles.package,
                {
                  left: index * 20, // Desplazamiento horizontal para superposición
                  zIndex: paquetes.length - index, // Control de la superposición
                },
              ]}
              onPress={() => setSelectedPackage(index)}
            >
              <Text style={styles.packageText}>{item}</Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true} // Para permitir "amontonamiento" (columnas)
          showsHorizontalScrollIndicator
          contentContainerStyle={{ width: paquetes.length * 23 }} // Estilo del contenedor
        />
      </View>
      <View style={styles.cards}>
        {selectedPackage !== null && (
          <View style={styles.card}>
            <Text style={styles.cardData}>{paquetes[selectedPackage]}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default OpenPackage;

const styles = StyleSheet.create({
  cards: {
    borderBlockColor: "black",
    padding: 20,
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 300,
    maxWidth: 300,
    minWidth: 300,
  },
  card: {
    width: 200,
    height: 260,
    backgroundColor: theme.colors.black,
  },
  cardData: {
    color: "white",
  },
  // listContainer: {
  //   width: paquetes.length * 80,
  // },
  list: {
    flexDirection: "row",
    height: 100,
    width: 280,
    marginBottom: 40,
    marginTop: -40,
  },
  package: {
    borderWidth: 2,
    borderColor: "black",
    position: "absolute",
    backgroundColor: "#e0e0e0",
    height: 98,
    width: 80,
    borderRadius: 8,
  },
  packageText: {
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
});
