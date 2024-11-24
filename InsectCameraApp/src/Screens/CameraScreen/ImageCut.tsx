import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../../../App";
import { RouteProp, useRoute } from "@react-navigation/native";
type ImageCutRouteProp = RouteProp<RootStackParamList, "ImageCut">;
const ImageCut = () => {
  const route = useRoute<ImageCutRouteProp>();
  const { selectedImage } = route.params;
  return (
    <View>
      <Text>Esta view es cameracut</Text>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
};

export default ImageCut;
