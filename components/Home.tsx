import { ACCESS_TOKEN_KEY } from "@/libs/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Home() {
  const handlePress = async () => {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    router.push("/auth/login");
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={handlePress}>
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
