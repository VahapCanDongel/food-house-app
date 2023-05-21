import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lets see if it is going to work</Text>

      <Pressable style={styles.myButton}>
        <Text style={styles.buttonText}>Click me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  myButton: {
    backgroundColor: "#428af5",
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
  },
});
