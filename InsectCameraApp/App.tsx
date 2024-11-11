import React, { useState, useRef, useCallback, useMemo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Platform,
} from "react-native";
import { Camera, CameraType, AutoFocus } from "expo-camera/legacy";
import { CameraCapturedPicture } from "expo-camera/build/Camera.types";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";
import ImageResizer from "react-native-image-resizer";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import * as ImageManipulator from "expo-image-manipulator";
import axios from "axios";

const Stack = createStackNavigator();

function CameraScreen({ navigation }: { navigation: any }) {
  const [type] = useState<CameraType>(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [zoom, setZoom] = useState(0);
  const [lastZoom, setLastZoom] = useState(0);
  const cameraRef = useRef<Camera | null>(null);

  useFocusEffect(
    useCallback(() => {
      const startCamera = async () => {
        if (cameraRef.current) {
          await cameraRef.current.resumePreview();
        }
      };

      const stopCamera = async () => {
        if (cameraRef.current) {
          await cameraRef.current.pausePreview();
        }
      };

      startCamera();

      return () => {
        stopCamera();
      };
    }, []),
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo: CameraCapturedPicture =
        await cameraRef.current.takePictureAsync();
      navigation.navigate("ImagePreview", { uri: photo.uri });
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
        <View style={styles.cameraView}>
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
    [onPinch, onPinchEnd, zoom, type, takePicture],
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

function ImagePreviewScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { uri } = route.params;
  console.log("uri", uri);

  const resizeImage = async (
    uri: string,
    width: number,
    height: number,
    quality: number,
  ) => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width, height } }],
        { compress: quality, format: ImageManipulator.SaveFormat.JPEG },
      );
      console.log(manipResult);
      return manipResult.uri;
    } catch (error) {
      console.error("Error resizing image:", error);
      return null;
    }
  };

  const sendInsect = async () => {
    try {
      console.log("esta uri", uri);
      const resizedUri = await resizeImage(uri, 300, 300, 0.6);
      // Redimensiona a 600x600 con calidad 70%
      console.log("resizedUri", resizedUri);
      if (!resizedUri) {
        console.error("resizedUri is null");
        return;
      }
      const responseImg = await fetch(resizedUri);
      const blob = await responseImg.blob();
      console.log("estesssssssssssssssssssssssssssssssssssssssssssssssssss");
      console.log("este blob", blob);
      let formData = new FormData();
      formData.append("image", blob, "image.jpg");
      console.log("hasta aca todo bien22");
      const res = await axios.get("http://192.168.0.105:3000/");
      console.log(res.data);
      console.log("formData", formData);
      const serverResponse = await axios.post(
        "http://192.168.0.105:3000/predict",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      console.log("hasta aca todo bien33", serverResponse);
      if (serverResponse.status !== 201) {
        throw new Error(`Server error: ${serverResponse.status}`);
      }
      console.log("response", serverResponse.data);
      if (serverResponse.data) {
        console.log("esta data", serverResponse.data[0].class);
        const insectName = serverResponse.data[0].class;
        navigation.navigate("InsectScreen", { insectName });
      }
    } catch (error) {
      console.error("Error sending insect:", error);
    }
  };

  return (
    <View style={styles.previewContainer}>
      <Image source={{ uri }} style={styles.previewImage} />
      <TouchableOpacity style={styles.sendButton} onPress={sendInsect}>
        <Text style={styles.sendText}>Enviar Insecto</Text>
      </TouchableOpacity>
    </View>
  );
}

function InsectScreen({ route, navigation }: { route: any; navigation: any }) {
  const { insectName } = route.params;

  return (
    <View style={styles.insectContainer}>
      <View style={styles.insectBox} />
      <Text style={styles.insectText}>¡Has encontrado un {insectName}!</Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.homeText}>Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

function MainScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.captureButton}
        onPress={() => navigation.navigate("Camera")}
      >
        <Text style={styles.captureText}>Capturar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Cámara" }}
        />
        <Stack.Screen
          name="ImagePreview"
          component={ImagePreviewScreen}
          options={{ title: "Vista Previa" }}
        />
        <Stack.Screen
          name="InsectScreen"
          component={InsectScreen}
          options={{ title: "Insecto Encontrado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraView: {
    flex: 1,
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
  captureButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "blue",
  },
  captureText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    width: "100%",
    height: "80%",
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "green",
    borderRadius: 10,
    marginTop: 20,
  },
  sendText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  insectContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  insectBox: {
    width: 200,
    height: 200,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  insectText: {
    marginTop: 20,
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  homeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  homeText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
