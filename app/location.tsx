import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";

interface Location {
    latitude: number,
    longitude: number
}

export default () => {
    const [region, setRegion] = useState<Region>({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    const [userLocation, setUserLocation] = useState<Location | null>(null);

    const showLocation = async() => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão para acessar localização negada.');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });

        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region} >
                {userLocation && <Marker coordinate={userLocation} title="Sua localização"/>}
            </MapView>
            <Button title="Ir para sua localização" onPress={showLocation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '95%'
    }
  });