import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "../libs";
import { LoadingLayout } from "../Components";
import PrizeScreen from "../Screens/PrizeScreen/PrizeScreen";
import TabNavigation from "./TabNavigation";

export type FunctionalStackParams = {
  LoadingLayout: { response: string | null };
  PrizeScreen: { response: string | null };
};

const AppNavigation = () => {
  const RootStack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabNavigation" component={TabNavigation} />
        <RootStack.Screen name="LoadingLayout" component={LoadingLayout} />
        <RootStack.Screen name="PrizeScreen" component={PrizeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
