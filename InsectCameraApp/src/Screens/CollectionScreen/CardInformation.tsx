import { Text, View, ScrollView, Alert, Pressable } from "react-native";
import { TitleLayout } from "../../Components";
import theme from "../../../config/theme";
import { Ionicons } from "../../libs";

const CardInformation = ({ navigation }) => {
  return (
    <TitleLayout
      title="Family Name"
      back={true}
      onPress={() => navigation.goBack()}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
          gap: 30,
        }}
        showsVerticalScrollIndicator={false} // Oculta la barra de scroll si no la necesitas
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 400,
            backgroundColor: "green",
            borderRadius: 10,
          }}
        >
          <Text>Card View</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: "auto",
            height: 400,
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text style={{ textAlign: "center", marginLeft: 10, flex: 1 }}>
              Informacion Basica
            </Text>
            <Ionicons
              name="information-circle"
              color={"blue"}
              size={20}
            ></Ionicons>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "100%",
            height: 400,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text style={{ textAlign: "center", marginLeft: 16, flex: 1 }}>
              Funcion Ecologica
            </Text>
            <Ionicons name="leaf" color={"green"} size={20}></Ionicons>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: "auto",
            alignItems: "center",
            width: "100%",
            height: 400,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text style={{ textAlign: "center", marginLeft: 20, flex: 1 }}>
              Precauciones
            </Text>
            <Ionicons name="alert-circle" color={"red"} size={20}></Ionicons>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          onPress={() => {
            navigation.navigate("WikiRedirect");
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: 60,
              backgroundColor: "white",
              flexDirection: "row",
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", marginLeft: 22, flex: 1 }}>
              Mas Informacion
            </Text>
            <Ionicons name="arrow-forward" size={24} color={"black"} />
          </View>
        </Pressable>
      </ScrollView>
    </TitleLayout>
  );
};

export default CardInformation;
