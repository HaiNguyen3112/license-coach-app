import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Pressable } from "react-native";

export default function ProfileScreen() {
  console.log("ProfileScreen");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
      <Pressable onPress={() => router.push("/auth/login")}>
        <Text className="font-semibold">Back to Login page</Text>
      </Pressable>
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
