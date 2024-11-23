import { Ionicons, Pressable, Alert, View } from "../../libs";
import { InfoButtonStyles, ButtonStyles } from "../../Styles";

const InfoButtons = (/*{ onPress }*/) => {
  const onPress = () => {
    Alert.alert("apretaste");
  };
  return (
    <View style={InfoButtonStyles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          InfoButtonStyles.icon,
          pressed && ButtonStyles.pressed,
        ]}
      >
        {/* <Shadow distance={5} startColor={"#00000015"}> */}
        <Ionicons
          name="information-circle"
          style={InfoButtonStyles.IconImage}
        />
        {/* </Shadow> */}
      </Pressable>

      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          InfoButtonStyles.icon,
          pressed && ButtonStyles.pressed,
        ]}
      >
        {/* <Shadow distance={5} startColor={"#00000015"}> */}
        <Ionicons
          name="warning"
          style={[InfoButtonStyles.IconImage, InfoButtonStyles.iconAlert]}
        />
        {/* </Shadow> */}
      </Pressable>
    </View>
  );
};

export default InfoButtons;
