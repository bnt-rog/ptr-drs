import {
  Text,
  StyleSheet,
  ButtonProps,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";

export type ThemedButtonProps = ButtonProps & {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export function ThemedButton({ title, onPress }: ThemedButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
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
