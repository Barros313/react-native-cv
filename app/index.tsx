import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

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
      <Link href='/about'>About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height:200,
    borderRadius: 18,
  }, name: {
    fontSize: 35,
  }
});
