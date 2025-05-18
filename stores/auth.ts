import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN_KEY } from "@/libs/axios";

type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  login: (accessToken: string) => Promise<void>;
  logout: () => Promise<void>;
  init: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  loading: true,

  init: async () => {
    try {
      const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      set({ isAuthenticated: !!token });
    } catch (err) {
      console.error("Failed to load auth token", err);
    } finally {
      set({ loading: false });
    }
  },

  login: async (accessToken: string) => {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    set({ isAuthenticated: true });
  },

  logout: async () => {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    set({ isAuthenticated: false });
  },
}));
