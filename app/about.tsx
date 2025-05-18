import axiosInstance from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  const { data } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const response = await axiosInstance.get("/posts/1");
      console.log(response.data);

      return response.data;
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Text style={styles.text}>Title: {data?.title}</Text>
      <Text style={styles.text}>Body: {data?.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
