import { View } from "../../libs";
import { ContainerStyles } from "../../Styles";
import OpenCameraButton from "./OpenCameraButton";
import TitleLabel from "../TitleLabel/Title";

export default function CameraView() {
  return (
    <TitleLabel title="Este title">
      <View style={ContainerStyles.container}>
        <OpenCameraButton />
      </View>
    </TitleLabel>
  );
}
