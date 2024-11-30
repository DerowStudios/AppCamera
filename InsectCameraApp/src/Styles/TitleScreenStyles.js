import { StyleSheet } from "react-native";
import theme from "../../config/theme";

const TitleScreenStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 30,
  },
  title: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  standarText: {
    marginTop: 50,
  },
  texto: {
    fontSize: 24,
    color: theme.colors.text,
    fontFamily: theme.fontFamily.ribeye,
    margin: "auto",
  },
  IconImage: {
    color: theme.colors.secondary,
    fontSize: 50,
  },
  IconClose: {
    marginLeft: "auto",
    paddingBottom: 12,
  },
  IconNext: {
    width: 50,
    marginLeft: "auto",
  },
});

export default TitleScreenStyles;
