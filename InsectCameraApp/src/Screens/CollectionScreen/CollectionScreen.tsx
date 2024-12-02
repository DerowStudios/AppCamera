import { Ionicons } from "../../libs";
import { ContainerStyles } from "../../Styles";
import { View, FlatList, Text, StyleSheet } from "react-native";

const MyComponent = () => {
  // Datos principales: Cada elemento contiene una lista de elementos secundarios
  const data = [
    { id: "1", items: ["01", "02", "03", "04", "05"] },
    { id: "2", items: ["06", "07", "08"] },
    { id: "3", items: ["08", "09", "10", "11", "12"] },
  ];

  // Renderizar los elementos secundarios dentro de cada sección
  const renderInnerItem = ({ item }) => (
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
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 100,
        }}
      >
        <View style={{ flexDirection: "row", maxWidth: 100 }}>
          <Ionicons name="star" size={24} color={"#e0e0e0"}></Ionicons>
          <Ionicons name="star" size={24} color={"#e0e0e0"}></Ionicons>
          <Ionicons name="star" size={24} color={"#e0e0e0"}></Ionicons>
        </View>
        <Ionicons name="trophy" size={64}></Ionicons>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderOuterItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  outerItem: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  innerItem: {
    width: 80,
    height: 80,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default MyComponent;
