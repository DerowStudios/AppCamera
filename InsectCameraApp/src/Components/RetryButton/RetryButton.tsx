import { Pressable, View } from "react-native";
import { Ionicons } from "../../libs";
import { ContainerStyles } from "../../Styles";
type MiFuncion = () => void;

const RetryButton: React.FC<{ handler: MiFuncion }> = ({ handler }) => {
  return (
    <View style={ContainerStyles.ContainerButton}>
      <Pressable onPress={handler}>
        <Ionicons name="refresh-circle" size={60} color={"black"} />
      </Pressable>
    </View>
  );
};

export default RetryButton;
