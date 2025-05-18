import Home from "@/components/Home";
import { View, StyleSheet, Platform, Text } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>This is user tabs</Text>
      <Home />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
