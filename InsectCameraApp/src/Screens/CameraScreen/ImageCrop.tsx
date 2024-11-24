import React, { useState } from "react";
import { View, Modal, Text, Button, StyleSheet, Image } from "react-native";
import {
  PanGestureHandler,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import * as ImageManipulator from "expo-image-manipulator";

const ImageCrop = ({ uri }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUri, setSelectedUri] = useState(uri); // Estado para la imagen recortada
  const [cropWidth, setCropWidth] = useState(200); // Ancho del cuadro de selección
  const [cropHeight, setCropHeight] = useState(200); // Alto del cuadro de selección
  const [cropX, setCropX] = useState(0); // Posición X del cuadro
  const [cropY, setCropY] = useState(0); // Posición Y del cuadro

  const onToggleModal = () => setModalVisible(!modalVisible);

  const handlePinch = (event) => {
    setCropWidth(cropWidth * event.nativeEvent.scale);
    setCropHeight(cropHeight * event.nativeEvent.scale);
  };

  const handlePan = (event) => {
    setCropX(cropX + event.nativeEvent.translationX);
    setCropY(cropY + event.nativeEvent.translationY);
  };

  const handleCropImage = async () => {
    try {
      const croppedImage = await ImageManipulator.manipulateAsync(
        selectedUri,
        [
          {
            crop: {
              originX: cropX,
              originY: cropY,
              width: cropWidth,
              height: cropHeight,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG },
      );
      setSelectedUri(croppedImage.uri); // Actualizamos la imagen con el resultado del corte
      onToggleModal(); // Cerrar el modal
    } catch (error) {
      console.error("Error al recortar la imagen:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Imagen Recortada:</Text>
      <Image source={{ uri: selectedUri }} style={styles.image} />
      <Button title="Abrir Editor de Imagen" onPress={onToggleModal} />

      {/* Modal para recorte */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Selecciona el área para recortar</Text>

          {/* Cuadro ajustable */}
          <PanGestureHandler onGestureEvent={handlePan}>
            <View style={styles.imageContainer}>
              <PinchGestureHandler onGestureEvent={handlePinch}>
                <View
                  style={{
                    ...styles.cropBox,
                    width: cropWidth,
                    height: cropHeight,
                    left: cropX,
                    top: cropY,
                  }}
                />
              </PinchGestureHandler>
              <Image source={{ uri: selectedUri }} style={styles.image} />
            </View>
          </PanGestureHandler>

          <Button title="Recortar Imagen" onPress={handleCropImage} />
          <Button title="Cerrar" onPress={onToggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 400,
  },
  cropBox: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "rgba(255, 0, 0, 0.3)",
  },
});

export default ImageCrop;
