// app/(auth)/login.tsx  ← adjust the path to match your routing
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import axiosInstance, {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/libs/axios";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "@/stores/auth";
import { authenticateWithBiometrics } from "@/utils/auth/biometric";

type LoginPayload = { username: string; password: string };
type LoginResponse = { accessToken: string; refreshToken?: string; user: any };

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuthStore();

  const [credentials, setCredentials] = useState<LoginPayload>({
    username: "",
    password: "",
  });

  /* ---------------------------  React-Query mutation  --------------------------- */
  const {
    mutate: loginMutation,
    isError,
    isPending: isLoading,
    error,
  } = useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (payload) => {
      const { data } = await axiosInstance.post("/api/auth", payload);
      return data;
    },

    onSuccess: async (data) => {
      console.log("data: ", data);

      await login(data.accessToken);

      if (data.refreshToken) {
        await AsyncStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
      }
      // navigate to your main (tabs) stack
      router.replace("/(tabs)");
    },
  });

  /* ------------------------------  Handlers  ----------------------------------- */
  const handleChange = (field: keyof LoginPayload) => (value: string) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!credentials.username || !credentials.password) return;
    // loginMutation(credentials);
    await login("asdasdasdas");
    router.replace("/(user)");
  };

  // 🔐 Biometric login on screen load
  // useEffect(() => {
  //   (async () => {
  //     const ok = await authenticateWithBiometrics();
  //     if (ok) {
  //       // Try to retrieve and reuse saved token
  //       const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
  //       if (token) {
  //         await login(token);
  //         router.replace("/(user)");
  //       } else {
  //         Alert.alert("No saved session found. Please log in.");
  //       }
  //     }
  //   })();
  // }, []);

  /* ---------------------------------  UI  ------------------------------------- */
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome back 👋</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={credentials.username}
        onChangeText={handleChange("username")}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={credentials.password}
        onChangeText={handleChange("password")}
        onSubmitEditing={handleSubmit}
      />

      {isError && (
        <Text style={styles.error}>{error?.message ?? "Login failed"}</Text>
      )}

      <Pressable
        style={styles.button}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text className="font-semibold">Log in</Text>
        )}
      </Pressable>
    </View>
  );
}

/* ---------------------------------  Styles  ----------------------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    display: "flex",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#1677ff",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  error: { color: "red", marginBottom: 12, textAlign: "center" },
});
