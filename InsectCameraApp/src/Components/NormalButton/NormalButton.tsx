import { Pressable, Text, View } from "react-native";

import theme from "../../../config/theme";
type MiFuncion = () => void;

const NormalButton: React.FC<{ handler: MiFuncion; title: string }> = ({
  handler,
  title,
}) => {
  return (
    <View style={{ padding: 24, height: 80 }}>
      <Pressable
        style={{
          paddingHorizontal: 30,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.primary,
          borderRadius: 10,
        }}
        onPress={handler}
      >
        <Text
          style={{
            fontFamily: "Ribeye-Regular",
            color: "white",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default NormalButton;
