import { StyleSheet } from "react-native";
import theme from "../../config/theme";

const InfoButtonStyles = StyleSheet.create({
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

    borderRadius: 50,
  },
  icon: {
    borderRadius: 50,
  },
  iconAlert: {
    color: theme.colors.secondary,
  },
});

export default InfoButtonStyles;
