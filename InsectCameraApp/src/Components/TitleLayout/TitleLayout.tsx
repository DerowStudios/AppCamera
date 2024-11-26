import { View, Text, Pressable, Alert, ReactNode, Ionicons } from "../../libs";
import { TitleScreenStyles, ButtonStyles } from "../../Styles";

interface TitleLabelProps {
  children: ReactNode;
  title: string;
  back?: boolean;
  next?: boolean;
  close?: boolean;
  standar?: boolean;
}

const TitleLayout: React.FC<TitleLabelProps> = ({
  children,
  title = "este",
  standar = true,
  back,
  next,
  close,
}) => {
  if (back || close) {
    standar = false;
  }

  const onPress = () => {
    Alert.alert("apretaste");
  };

  return (
    <View style={TitleScreenStyles.container}>
      <View style={TitleScreenStyles.title}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            close && TitleScreenStyles.IconClose,
            pressed && ButtonStyles.pressed,
          ]}
        >
          {back && (
            <Ionicons
              name="arrow-back-circle"
              style={TitleScreenStyles.IconImage}
            />
          )}
          {close && (
            <Ionicons
              name="close-circle"
              style={[TitleScreenStyles.IconImage]}
            />
          )}
        </Pressable>
        <Text
          style={[
            TitleScreenStyles.texto,
            standar && TitleScreenStyles.standarText,
          ]}
        >
          {title}
        </Text>
      </View>
      {children}
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          TitleScreenStyles.IconNext,
          pressed && ButtonStyles.pressed,
        ]}
      >
        {next && (
          <Ionicons
            name="arrow-forward-circle"
            style={[TitleScreenStyles.IconImage]}
          />
        )}
      </Pressable>
    </View>
  );
};

export default TitleLayout;
