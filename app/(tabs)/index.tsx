import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedLink } from "@/components/ThemedLink";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const handlePress = () => {
    alert("Welcome Button Pressed!");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffffff", dark: "#ffffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/puiten-logo.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedLink
          link={
            <Link href="/addRide">
              <ThemedText style={styles.buttonText}>Rit aanmaken</ThemedText>
            </Link>
          }
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  reactLogo: {
    position: "absolute",
    width: "50%",
    height: "75%",
    top: "25%",
    left: "25%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
