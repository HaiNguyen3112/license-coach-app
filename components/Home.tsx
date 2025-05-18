import { Image } from "expo-image";
import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={() => router.push("/auth/login")}>
        <Text className="font-semibold">Back to Login page</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 18,
  },
});
