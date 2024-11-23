import { ReactNode } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Ionicons } from "../../libs";
import theme from "../../../config/theme";
// import { ContainerStyles } from "../../Styles";

interface TitleLabelProps {
  children: ReactNode;
  back: boolean | undefined;
  next: boolean | undefined;
  close: boolean | undefined;
  standar: boolean;
}

const TitleLabel: React.FC<TitleLabelProps> = ({
  children,
  standar = true,
  back,
  next = true,
  close,
}) => {
  if (back || close) {
    standar = false;
  }

  const onPress = () => {
    Alert.alert("apretaste");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            close && styles.IconClose,
            pressed && styles.pressed,
          ]}
        >
          {back && (
            <Ionicons name="arrow-back-circle" style={styles.IconImage} />
          )}
          {close && <Ionicons name="close-circle" style={[styles.IconImage]} />}
        </Pressable>
        <Text style={[styles.texto, standar && styles.standarText]}>
          Todo esto es un title
        </Text>
      </View>
      {children}
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          next && styles.IconNext,
          pressed && styles.pressed,
        ]}
      >
        {next && (
          <Ionicons name="arrow-forward-circle" style={[styles.IconImage]} />
        )}
      </Pressable>
    </View>
  );
};

export default TitleLabel;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
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
    color: "#343434",
    fontFamily: "Ribeye-Regular",
    margin: "auto",
  },
  IconImage: {
    color: theme.colors.secondary,
    fontSize: 50,
  },
  IconClose: {
    marginLeft: "auto",
  },
  IconNext: {
    marginLeft: "auto",
    paddingBottom: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});
