import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Education() {
    return (
        <View style={styles.container}>
            <Text style={styles.institutionName}> EDUCAÇÃO </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    

    institutionName: {
        fontSize: 40,
    },

    text: {
        fontSize: 30,
        color: "#333",
    }
});