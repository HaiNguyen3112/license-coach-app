"use client";

import { Redirect, Slot, usePathname } from "expo-router";
import { useAuthStore } from "../stores/auth";
import { View, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN_KEY } from "@/libs/axios";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading, logout } = useAuthStore();
  console.log("change in wrapp com");
  const pathName = usePathname();

  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      if (!accessToken) {
        logout();
      }
    };
    getAccessToken();
  }, [pathName]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return <>{children}</>;
}
