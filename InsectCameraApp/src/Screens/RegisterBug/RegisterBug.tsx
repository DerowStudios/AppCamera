import { Text, TextInput, View, Alert } from "react-native";
import { TitleLayout } from "../../Components";
import { ContainerStyles } from "../../Styles";
import { useState } from "react";
import { Ionicons } from "../../libs";
import NormalButton from "../../Components/NormalButton/NormalButton";

const RegisterBug = ({ navigations }) => {
  const [insecto, setInsecto] = useState("");
  const [region, setRegion] = useState("");
  return (
    <TitleLayout title={"Nuevo Registro"} back={true}>
      <View style={ContainerStyles.container}>
        <View
          style={{
            width: 180,
            height: 200,
            backgroundColor: "gray",
            padding: 10,
            margin: 40,
            borderRadius: 10,
          }}
        ></View>
        <Text style={{ width: 220, marginBottom: 4 }}>Nombre del insecto</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TextInput
            style={{
              padding: 10,
              borderWidth: 2,
              borderRadius: 10,
              width: 200,
            }}
            value={insecto}
            placeholder={"Abeja"}
            maxLength={30}
            autoCapitalize={"words"}
            onChangeText={(text) => setInsecto(text)}
          />
          <Ionicons
            name="help-circle"
            size={30}
            onPress={() =>
              Alert.alert(
                "nombre del insecto",
                "Con que nombre conoces a este insecto?"
              )
            }
          ></Ionicons>
        </View>
        <Text style={{ width: 220, marginBottom: 4 }}>Region / Pais</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              padding: 10,
              borderWidth: 2,
              borderRadius: 10,
              width: 200,
            }}
            value={region}
            placeholder={"Patagonia Argentina"}
            maxLength={30}
            autoCapitalize={"words"}
            onChangeText={(text) => setRegion(text)}
          />
          <Ionicons
            name="help-circle"
            size={30}
            onPress={() =>
              Alert.alert(
                "¿En qué país y región?", // Título
                "Por favor, especifica el país y la región donde ocurrió el avistamiento."
              )
            }
          ></Ionicons>
        </View>
        <NormalButton
          title={"Enviar"}
          handler={() => navigation.navigate("SuccesRegister")}
        />
      </View>
    </TitleLayout>
  );
};

export default RegisterBug;
