import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import { useAuthStore } from "@/stores/auth";

export default function AppLifecycleWatcher() {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      // appState: the previous state of my app
      // nextAppState: the next/new state of my app
      if (
        appState.current === "active" &&
        nextAppState.match(/background|inactive/)
      ) {
        console.log("⏸ App moved to background");
        timeoutRef.current = setTimeout(() => {
          console.log("👋 Auto-logout due to inactivity");
          logout();
        }, 2 * 60 * 1000); // 2 minutes
      }

      if (
        appState.current.match(/background|inactive/) &&
        nextAppState === "active"
      ) {
        console.log("🔙 App came back to foreground");
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }

      // we set new state for our app here
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [logout]);

  return null;
}
