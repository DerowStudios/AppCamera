import { View } from "../../libs";
import { ContainerStyles } from "../../Styles";
import TitleLayout from "../TitleLayout/TitleLayout";
import OpenCameraButton from "./OpenCameraButton";

export default function CameraView() {
  return (
    <TitleLayout title="Este title">
      <View style={ContainerStyles.container}>
        <OpenCameraButton />
      </View>
    </TitleLayout>
  );
}
