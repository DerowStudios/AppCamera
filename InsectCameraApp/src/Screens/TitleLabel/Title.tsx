import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "../../libs";
// import { ContainerStyles } from "../../Styles";

interface TitleLabelProps {
  children: ReactNode;
}

const TitleLabel: React.FC<TitleLabelProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Ionicons name="arrow-back-circle" style={styles.IconImage} />
        <Text style={styles.texto}>Todo esto es un title</Text>
      </View>
      {children}
    </View>
  );
};

export default TitleLabel;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    flexDirection: "row",
  },
  texto: {
    fontSize: 22,
    lineHeight: 22,
    color: "#343434",
    flex: 1,
    fontWeight: "500",
    justifyContent: "flex-start",
    alignContent: "flex-end",
  },
  titleText: {
    marginTop: -20,
    paddingBottom: 30,
  },
  IconImage: {
    color: "#84DC80",
    fontSize: 50,
  },

  pressed: {
    opacity: 0.7, // Reduce opacidad al presionar
  },
});
