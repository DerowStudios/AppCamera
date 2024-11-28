import { Pressable, View } from "react-native";
import { Ionicons } from "../../libs";
import { ContainerStyles } from "../../Styles";

const RetryButton = ({ handler }: any) => {
  return (
    <View style={ContainerStyles.ContainerButton}>
      <Pressable onPress={handler}>
        <Ionicons name="refresh-circle" size={60} color={"gray"} />
      </Pressable>
    </View>
  );
};

export default RetryButton;
