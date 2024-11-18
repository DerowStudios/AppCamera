import { StyleSheet } from "react-native";
import theme from "../../config/theme";

const PlayerHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row", // Hace que los hijos estén en columnas
    height: 110, // Altura del header
    backgroundColor: theme.colors.black, // Color de fondo
    alignItems: "center", // Centra el contenido verticalmente
    // paddingTop: Constants.statusBarHeight,
  },
  firstColumn: {
    width: 100, // Ancho fijo de la primera columna
    height: 100, // Altura fija
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black, // Color para distinguir
  },
  secondColumn: {
    flex: 1, // Ocupa el resto del espacio
    flexDirection: "column", // Divide en filas
  },
  secondRow: {
    flex: 1, // Las filas ocupan partes iguales
    justifyContent: "center",
    alignItems: "flex-start", // Ajusta contenido al inicio
    paddingLeft: 10, // Separación interna
  },
  headerText: {
    color: "#fff", // Texto blanco
    fontSize: 18, // Tamaño de texto
    fontWeight: "bold", // Negrita
  },
});

export default PlayerHeaderStyles;
