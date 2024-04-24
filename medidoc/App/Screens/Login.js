import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import app from "../../assets/images/app.png";
import Colors from "../Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={app} style={styles.appImage} />
      <View style={styles.insideView}>
        <Text style={styles.heading}>You ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book Appointment Effortlessly and manage your health journey
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.LIGHT_GRAY,
  },
  appImage: {
    width: 230,
    height: 500,
    objectFit: "contain",
    marginTop: 100,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  insideView: {
    backgroundColor: Colors.white,
    padding: 25,
    alignItems: "center",
    marginTop: -100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
