import { Text, View, Modal } from "react-native";
import { TitleLayout } from "../../Components";
import { ContainerStyles } from "../../Styles";
import { useState } from "react";

const SuccesRegister = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  //estado de redux que no te permite volver a registrar insecto.
  return (
    <Modal
      animationType="slide" // Efecto de transición
      transparent={false} // Asegura que cubra toda la pantalla
      visible={modalVisible} // Controla si el modal está visible
      onRequestClose={() => setModalVisible(false)} // Acción al cerrar
    >
      <TitleLayout
        title={"Registrado con exito!"}
        close={true}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate("PrizeScreen");
        }}
      >
        <View style={[ContainerStyles.container, {}]}>
          <Text style={{ height: 100 }}>
            succes regiseter Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat totam rem qui sed labore. Voluptatem fuga facere id
            necessitatibus, corrupti sed, repellat ipsum magni cum corporis
            praesentium, dolores doloremque at?
          </Text>
        </View>
      </TitleLayout>
    </Modal>
  );
};

export default SuccesRegister;
