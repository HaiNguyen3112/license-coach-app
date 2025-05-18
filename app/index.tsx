import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      // delay until router is ready
      const timeout = setTimeout(() => {
        router.replace("/(user)");
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [router]);
  console.log("change");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
}
