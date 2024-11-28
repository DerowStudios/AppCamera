import { createStackNavigator } from "@react-navigation/stack";
import { CameraOn, CameraScreen, ImageCut } from "../Screens";
import { LoadingLayout } from "../Components";
import PrizeScreen from "../Screens/PrizeScreen/PrizeScreen";
import PrizeCards from "../Screens/PrizeScreen/PrizeCards";

export type CameraStackParamList = {
  CameraOn: undefined; // Esta pantalla no recibe parámetros
  ImageCut: { selectedImage: string | null }; // Esta pantalla recibe un objeto `selectedImage`
  NextToLoading: { response: string | null };
  LoadingLayout: { response: string | null };
  PrizeScreen: { response: string | null };
  PrizeCards: { response: string | null };
};

const CameraStack = createStackNavigator();
function CameraNavigation() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="inicio"
        component={CameraScreen as any}
        options={{
          headerShown: false,
        }}
      />
      <CameraStack.Screen
        name="CameraOn"
        component={CameraOn}
        options={{
          headerShown: false,
        }}
      />
      <CameraStack.Screen
        name="ImageCut"
        component={ImageCut}
        options={{
          headerShown: false,
        }}
      />
      <CameraStack.Screen
        name="LoadingLayout"
        component={LoadingLayout}
        options={{
          headerShown: false,
        }}
      />
      <CameraStack.Screen
        name="PrizeScreen"
        component={PrizeScreen}
        options={{
          headerShown: false,
        }}
      />
      <CameraStack.Screen
        name="PrizeCards"
        component={PrizeCards}
        options={{
          headerShown: false,
        }}
      />
    </CameraStack.Navigator>
  );
}

export default CameraNavigation;
