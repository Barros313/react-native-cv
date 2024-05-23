import React from "react";
import { Text, View } from "react-native";

export default function Education() {
    return (
        <View style={styles.container}>
            <Text> Educação </Text>
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
        fontSize: '50px',
    },

    text: {
        fontSize: 30,
        color: "#333",
    },


});