import { Link, LinkProps } from "expo-router";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export type ThemedLinkProps = {
  link: React.ReactNode;
};

export function ThemedLink({ link }: ThemedLinkProps) {
  return <TouchableOpacity style={styles.button}>{link}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0c3634",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
