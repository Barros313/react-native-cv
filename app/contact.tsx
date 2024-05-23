import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';


export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}> CONTATO </Text>    

            <View style={styles.tabContainer} >

                <View style={styles.contacts} >
                    <Text> <Entypo name="mail" size={24} color="black" /> gbarros1337@gmail.com</Text>
                    <Text> <Entypo name="phone" size={24} color="black" /> (81) 99906-0088</Text>
                </View>


                <View style={styles.contactsLink}>
                    <Link href='https://github.com/Barros313'> 
                        <Text> <AntDesign name="github" size={24} color="black" /> Barros313 </Text> 
                    </Link>
                        <Link href='https://www.linkedin.com/in/gabrielbalmeida/'> 
                        <Text> <AntDesign name="linkedin-square" size={24} color="black" /> Gabriel Barros </Text> 
                    </Link>
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

    contacts: {
        margin: 30,
    },

    contactsLink: {
        margin: 30,
    }
});