import { ACCESS_TOKEN_KEY } from "@/libs/axios";
import { useAuthStore } from "@/stores/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function ProfileScreen() {
  console.log("ProfileScreen");
  const { logout } = useAuthStore();

  // Dummy user data
  const user = {
    name: "Hai Nguyen",
    email: "hai.nguyen@example.com",
    avatar: "https://i.pravatar.cc/150?img=13",
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleRemoveToken = async () => {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.removeButton]}
        onPress={handleRemoveToken}
      >
        <Text style={styles.buttonText}>Remove Access Token</Text>
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
    paddingHorizontal: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    color: "#ccc",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#1677ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
  },
  removeButton: {
    backgroundColor: "#ff4d4f",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
