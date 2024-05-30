import React, { useState, useEffect } from "react";
import { Text, Platform, View, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LocationObjectCoords } from "expo-location";

interface CurrentLocation {
    latitude: number,
    longitude: number,
    latitudeDelta: number;
    longitudeDelta: number;
}

export default () => {
    const [location, setLocation] = useState<CurrentLocation | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const locateUser = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permissão de acesso a localização do dispositivo negada.');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
    };

/*     useEffect(() => {
        locateUser();
    }, []); */

    let text = 'Aguardando...';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Ir para minha localização" onPress={locateUser} />
                <View style={styles.mapContainer}>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        region={location || undefined}
                        style={styles.map}
                    >

                        {location && (
                            <Marker
                                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                                title="Localização atual"
                                />
                        )}

                    </MapView>
                </View>
                <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
    mapContainer: {
        flex: 1,
        width: '95%',
        alignSelf: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
    }
  });