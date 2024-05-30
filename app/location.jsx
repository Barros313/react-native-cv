import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Button, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [mensagemErro, setMensagemErro] = useState(null);

  const handleUsuario = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMensagemErro('Permissão negada.');
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Ir para localização atual" onPress={handleUsuario} />
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: -8.063108,
            longitude: -34.874002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={location}
          style={styles.map}
        >
          {location && (
            <Marker
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title="Sua localização!"
            />
          )}
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    alignSelf: "center",
  },
  map: {
    width: '100%',
    height: '100%',
  },
});