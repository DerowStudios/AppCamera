import { createStackNavigator } from "../libs";
import { Screen1, Screen2, Screen3, OpenPackage } from "../Screens";

const StackPackage = createStackNavigator();

function PackageStack() {
  return (
    <StackPackage.Navigator>
      <StackPackage.Screen
        name="Inicio"
        options={{ headerShown: false }}
        component={OpenPackage as any}
      />
      <StackPackage.Screen name="Screen1" component={Screen1} />
      <StackPackage.Screen name="Screen2" component={Screen2} />
      <StackPackage.Screen name="Screen3" component={Screen3} />
    </StackPackage.Navigator>
  );
}
export default PackageStack;
