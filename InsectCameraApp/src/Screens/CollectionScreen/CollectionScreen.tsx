import theme from "../../../config/theme";
import { Ionicons } from "../../libs";
import { TitleScreenStyles } from "../../Styles";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";

const MyComponent = ({ navigation }) => {
  // Datos principales: Cada elemento contiene una lista de elementos secundarios
  const data = [
    { id: "1", items: ["01", "02", "03", "04", "05", "T00"] },
    { id: "2", items: ["06", "07", "08", "T00"] },
    { id: "3", items: ["08", "09", "10", "11", "12", "T00"] },
  ];

  // Renderizar los elementos secundarios dentro de cada sección
  const renderInnerItem = ({ item }) =>
    item === "T00" ? (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 110,
          height: 120,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", maxWidth: 100 }}>
          <Ionicons name="star" size={20} color={"#e0e0e0"}></Ionicons>
          <Ionicons name="star" size={20} color={"#e0e0e0"}></Ionicons>
          <Ionicons name="star" size={20} color={"#e0e0e0"}></Ionicons>
        </View>
        <Ionicons name="trophy" size={56} color={"#e0e0e0"}></Ionicons>
        <Pressable onPress={() => Alert.alert("Reclamaste")}>
          <Text
            style={{
              padding: 8,
              backgroundColor: "orange",
              borderRadius: 10,
              fontFamily: "Ribeye-Regular",
              color: "white",
            }}
          >
            RECLAMAR
          </Text>
        </Pressable>
      </View>
    ) : (
      <View style={styles.innerItem}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );

  // Renderizar cada sección con su `FlatList` interna
  const renderOuterItem = ({ item }) => (
    <View style={styles.outerItem}>
      <Text style={styles.sectionTitle}>Sección {item.id}</Text>
      <FlatList
        data={item.items}
        renderItem={renderInnerItem}
        keyExtractor={(innerItem, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={[TitleScreenStyles.container, { marginTop: 10 }]}>
      <Text style={[styles.title, { marginBottom: -10 }]}> Entomoteca </Text>
      <View>
        <TextInput
          placeholder="Search"
          style={{
            flexGrow: 1,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1.5,
          }}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          gap: 5,
          marginTop: -14,
          marginBottom: -14,
        }}
      >
        <Text style={styles.buttonsPagination}>1</Text>
        <Text
          style={[
            styles.buttonsPagination,
            { backgroundColor: theme.colors.textSecondary },
          ]}
        >
          2
        </Text>
        <Text
          style={[
            styles.buttonsPagination,
            { backgroundColor: theme.colors.textSecondary },
          ]}
        >
          3
        </Text>
        <Text
          style={[
            styles.buttonsPagination,
            { backgroundColor: theme.colors.grayLight },
          ]}
        >
          4
        </Text>
        <View
          style={{
            flexGrow: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontFamily: "Ribeye-Regular", fontSize: 20 }}>
            00%
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderOuterItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontFamily: "Ribeye-Regular", fontSize: 24, textAlign: "center" },
  outerItem: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonsPagination: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontFamily: "Ribeye-Regular",
    borderRadius: 5,
    width: 26,
    height: 26,
    backgroundColor: theme.colors.primary,
  },
  innerItem: {
    width: 100,
    height: 126,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  text: {
    fontFamily: "Ribeye-Regular",
    fontSize: 20,
    color: "white",
  },
});

export default MyComponent;
