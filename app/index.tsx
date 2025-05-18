import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Index() {
  console.log(process.env.EXPO_PUBLIC_API_URL);
  return (
    <View style={styles.container}>
      <Text style={styles.text} className="text-red-400 text-[20px]">
        Home screen
      </Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
      <Link href="/auth/login" style={styles.button}>
        Go to Login screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
