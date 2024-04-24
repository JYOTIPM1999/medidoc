import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "appfont-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "app-font": require("./assets/fonts/Outfit-Regular.ttf"),
    "appfont-semibold": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "appfont-light": require("./assets/fonts/Outfit-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={
        "pk_test_c3Rlcmxpbmctc2VhZ3VsbC05MS5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
