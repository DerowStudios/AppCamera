import { StyleSheet } from "react-native";
import theme from "../../config/theme";

const CameraButtonMenu = StyleSheet.create({
  cameraButtonContainer: {
    width: 90, // Ancho más grande
    height: 90, // Alto más grande
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary, // O cualquier color que combine
    borderRadius: 50, // Borde redondeado 50% del tamaño
    borderWidth: 2, // Añadir borde si es necesario
    borderColor: theme.colors.white, // Borde blanco (opcional)
    marginBottom: 10, // Para que sobresalga un poco de la barra de navegación
    shadowColor: theme.colors.black, // Sombra para un efecto flotante
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});

export default CameraButtonMenu;
