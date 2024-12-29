import { Image, StyleSheet, TextInput } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function AddRide() {
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
        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.label}>Naam</ThemedText>
          <TextInput style={styles.textInput} placeholder="Naam rit" />
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.label}>KM</ThemedText>
          <TextInput style={styles.textInput} placeholder="Aantal KM" />
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.label}>Groep</ThemedText>
          <TextInput style={styles.textInput} placeholder="Groep" />
        </ThemedView>
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
  inputContainer: {
    width: "80%", // Controls the overall width of each row
    marginBottom: 16, // Space between input fields
    alignItems: "flex-start", // Align label to the left
  },
  textInput: {
    width: "100%", // Take up full width of the container
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 8,
  },
  label: {
    width: "100%", // Ensure label spans the full width above the input
    marginBottom: 8, // Space between label and input field
    fontSize: 16,
    fontWeight: "bold",
  },
});
