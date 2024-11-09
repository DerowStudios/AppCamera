import { useState, useRef, useCallback, useMemo } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { Camera, CameraType, AutoFocus } from "expo-camera/legacy";
import { CameraCapturedPicture } from "expo-camera/build/Camera.types";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
export default function App() {
  const [type] = useState<CameraType>(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [zoom, setZoom] = useState(0);
  const [lastZoom, setLastZoom] = useState(0);
  const cameraRef = useRef<Camera | null>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo: CameraCapturedPicture =
        await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
      // Aquí puedes manejar la foto tomada, por ejemplo, guardarla o mostrarla.
    }
  };

  const onPinch = useCallback(
    (event: PinchGestureHandlerGestureEvent) => {
      const velocity = event.nativeEvent.velocity / 20;
      const outFactor = lastZoom * (Platform.OS === "ios" ? 40 : 15);

      let newZoom =
        velocity > 0
          ? zoom +
            event.nativeEvent.scale *
              velocity *
              (Platform.OS === "ios" ? 0.01 : 25)
          : zoom -
            event.nativeEvent.scale *
              (outFactor || 1) *
              Math.abs(velocity) *
              (Platform.OS === "ios" ? 0.02 : 50);

      if (newZoom < 0) newZoom = 0;
      else if (newZoom > 1) newZoom = 1;

      setZoom(newZoom);
    },
    [zoom, lastZoom],
  );

  const onPinchEnd = useCallback(() => {
    setLastZoom(zoom);
  }, [zoom]);

  const pinchGesture = useMemo(
    () => (
      <PinchGestureHandler
        onGestureEvent={onPinch}
        onHandlerStateChange={onPinchEnd}
      >
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            zoom={zoom}
            autoFocus={AutoFocus.on}
            ref={cameraRef}
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Text style={styles.text}>Tomar Foto</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      </PinchGestureHandler>
    ),
    [onPinch, onPinchEnd, zoom, type],
  );

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Necesitamos tu permiso para mostrar la cámara
        </Text>
        <Button onPress={requestPermission} title="Conceder permiso" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.root}>
      {pinchGesture}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
