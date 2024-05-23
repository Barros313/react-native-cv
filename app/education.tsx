import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Education() {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}> EDUCAÇÃO </Text>

            <View style={styles.tabContainer}>

            

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    tabContainer: {
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    pageTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000"
    },

    text: {
        fontSize: 30,
        color: "#333",
    }
});