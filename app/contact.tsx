import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}> CONTATO </Text>    

            <View style={styles.contactContainer} >

                <View style={styles.contacts} >
                    <Text>Email: gbarros1337@gmail.com</Text>
                    <Text>Telefone: (81) 99906-0088</Text>
                </View>


                <View style={styles.contactsLink}>
                    <Link href='https://github.com/Barros313'> <Text> GitHub - Barros313 </Text> </Link>
                    <Link href='https://www.linkedin.com/in/gabrielbalmeida/'> <Text> LinkedIn - Gabriel Barros </Text> </Link>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    contactContainer: {
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

    contacts: {
        margin: 30,
    },

    contactsLink: {
        margin: 30,
    }
});