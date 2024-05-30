import React, { useState, useEffect } from "react";
import { Text, Platform, View, StyleSheet } from "react-native";

import * as Location from "expo-location";


export default () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permissão de acesso a localização do dispositivo negada.');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();

    }, []);

    let text = 'Aguardando...';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> {text} </Text>
        </View>
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
  });