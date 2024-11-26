import { createStackNavigator } from "@react-navigation/stack";
import { CameraOn, CameraScreen, ImageCut } from "../Screens";

export type RootStackParamList = {
  CameraOn: undefined; // Esta pantalla no recibe parámetros
  ImageCut: { selectedImage: string | null }; // Esta pantalla recibe un objeto `selectedImage`
};

const CameraStack = createStackNavigator();
function CaptureStack() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="Inicio"
        component={CameraScreen as any}
        options={{
          headerShown: false,
        }}
      />
      <CameraStack.Screen name="CameraOn" component={CameraOn} />
      <CameraStack.Screen name="ImageCut" component={ImageCut} />
    </CameraStack.Navigator>
  );
}

export default CaptureStack;
