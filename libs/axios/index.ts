import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { router } from "expo-router";

// Update these keys according to your app
export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
        if (refreshToken) {
          // Example: call your refresh endpoint
          const res = await axios.post(
            `${process.env.EXPO_PUBLIC_API_URL}/auth/refresh`,
            {
              refreshToken,
            }
          );

          const newAccessToken = res.data.accessToken;
          await AsyncStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);

          // Retry the original request
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.warn("Refresh token failed", refreshError);
        await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
        await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
        Alert.alert("Session expired", "Please log in again.");

        router.replace("/auth/login"); // Navigate to the login screen
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
