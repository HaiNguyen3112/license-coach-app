// app/_layout.tsx
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function StackNavigation() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="auth/login"
          options={{ title: "Login", headerBackVisible: false }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "Tabs" }}
        />
        <Stack.Screen
          name="(user)"
          options={{ headerShown: false, title: "User" }}
        />
        <Stack.Screen
          name="+not-found"
          options={{ title: "Oops! Not Found" }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
