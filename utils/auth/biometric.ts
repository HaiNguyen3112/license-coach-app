import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

export async function authenticateWithBiometrics(): Promise<boolean> {
  // Step 1: Check if hardware supports biometrics
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  if (!hasHardware) {
    Alert.alert(
      "Error",
      "Biometric authentication is not supported on this device."
    );
    return false;
  }

  // Step 2: Check if any biometric is enrolled (Face ID, Touch ID, etc.)
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();
  if (!isEnrolled) {
    Alert.alert("Error", "No biometrics are enrolled on this device.");
    return false;
  }

  // Step 3: Prompt user for biometric authentication
  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Authenticate with Face ID / Touch ID",
    fallbackLabel: "Use passcode",
    cancelLabel: "Cancel",
    disableDeviceFallback: false, // allow fallback to device passcode if biometric fails
  });

  if (result.success) {
    console.log("✅ Biometric auth success");
    return true;
  } else {
    console.log("❌ Biometric auth failed or canceled", result);
    return false;
  }
}
