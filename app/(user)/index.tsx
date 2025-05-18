import Home from "@/components/Home";
import { View, StyleSheet, Platform, Text } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  console.log("Home");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
