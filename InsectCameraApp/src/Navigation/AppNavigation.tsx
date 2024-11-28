import { NavigationContainer, createStackNavigator, StatusBar } from "../libs";
import TabNavigation from "./TabNavigation";
import OpenPackage from "../Screens/OpenPackage/OpenPackage";

const AppNavigation = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabNavigation" component={TabNavigation} />
        <RootStack.Screen name="OpenPackage" component={OpenPackage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
