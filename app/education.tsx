import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Education() {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}> EDUCAÇÃO </Text>

            <View style={styles.tabContainer}>

            <View style={styles.text}>
                <View>
                    <Image style={styles.image} source={require("../assets/images/senac-black-white.png")}/>

                    <Text> Faculdade Senac PE </Text>
                    <Text> Análise e Desenvolvimento de Sistemas </Text>
                    <Text> 2023 - 2025 (Cursando) </Text>
                </View>
            </View>

            <View style={styles.text}>
                <View>
                    <Image style={styles.image} source={require("../assets/images/ifpe-logo.png")}/>

                    <Text> Instituto Federal de Pernambuco - Campus Recife </Text>
                    <Text> Ténico em Eletrotécnica </Text>
                    <Text> 2018 - 2021 (Incompleto) </Text>
                </View>
            </View>


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
        margin: 30,
        flexDirection: "row",
        alignItems: "center"
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 5,
    }
});