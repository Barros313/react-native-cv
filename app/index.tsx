import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require('../assets/images/barros313-profile-picture.png')} style={styles.image}></Image>
      <Text style={styles.name}> Gabriel Barros </Text>

      <View style={styles.tabContainer}>
        
        <Link href='/contact' style={styles.navbarItems} > 
          <Pressable>
            <Text> CONTATO </Text>
          </Pressable>
        </Link>

        <Link href='/education' style={styles.navbarItems} > 
          <Pressable>
            <Text> EDUCAÇÃO </Text>
          </Pressable> 
        </Link>

        <Link href='/projects' style={styles.navbarItems} > 
          <Pressable>
            <Text> PROJETO </Text>
          </Pressable> 

        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
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

  name: {
    fontSize: 35,
  },
  
  navbarItems: {
    margin: 10,
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle:'solid',
    textDecorationColor: 'blue',
  }
});
