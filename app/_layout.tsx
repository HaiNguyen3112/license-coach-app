// app/_layout.tsx
import { Slot, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth";
import { useEffect } from "react";
import AppLifecycleWatcher from "@/hooks/AppLifecycleWatcher";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

export default function RootLayout() {
  const init = useAuthStore((state) => state.init);

  useEffect(() => {
    init();
  }, []);

  console.log("change in layout root");

  return (
    <QueryClientProvider client={queryClient}>
      <AppLifecycleWatcher />
      <Slot />
    </QueryClientProvider>
  );
}
