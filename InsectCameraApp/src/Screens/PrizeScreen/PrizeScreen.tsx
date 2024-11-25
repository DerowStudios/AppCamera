import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { FunctionalStackParams } from "../../../App";
// import { StackNavigationProp } from "@react-navigation/stack";

type ImageCutRouteProp = RouteProp<FunctionalStackParams, "LoadingLayout">;
// type CameraOnNavigationProp = StackNavigationProp<
//   FunctionalStackParams,
//   "LoadingLayout"
// >;
const PrizeScreen = () => {
  const route = useRoute<ImageCutRouteProp>();

  const { response } = route.params || {};
  return (
    <View>
      <Text>Felicitaciones!</Text>
      <Text>{response}</Text>
    </View>
  );
};
export default PrizeScreen;
