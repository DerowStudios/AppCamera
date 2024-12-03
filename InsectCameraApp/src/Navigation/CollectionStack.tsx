import { createStackNavigator } from "../libs";
import CollectionScreen from "../Screens/CollectionScreen/CollectionScreen";
import CardInformation from "../Screens/CollectionScreen/CardInformation";
import WikiRedirect from "../Screens/CollectionScreen/WikiRedirect";

const CollectionStack = createStackNavigator();

function CollectionNav() {
  return (
    <CollectionStack.Navigator>
      <CollectionStack.Screen
        name="Collection"
        options={{ headerShown: false }}
        component={CollectionScreen as any}
      />
      <CollectionStack.Screen
        name="CardInformation"
        options={{ headerShown: false }}
        component={CardInformation}
      />
      <CollectionStack.Screen name="WikiRedirect" component={WikiRedirect} />
    </CollectionStack.Navigator>
  );
}
export default CollectionNav;
