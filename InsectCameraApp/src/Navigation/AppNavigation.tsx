import { NavigationContainer, createStackNavigator, StatusBar } from "../libs";
import TabNavigation from "./TabNavigation";
import PackageStack from "./PackageStack";

const AppNavigation = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabNavigation" component={TabNavigation} />
        <RootStack.Screen name="OpenPackage" component={PackageStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
