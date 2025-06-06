import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ChallengeIcon, GiftIcon, ProfileIcon } from "@/assets/icons/icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "white",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff", //Text color
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons name={"home-sharp"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="gift"
        options={{
          title: "Gift",
          tabBarIcon: ({ color }: any) => <GiftIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="challenge"
        options={{
          title: "Challenge",
          tabBarIcon: ({ color }: any) => <ChallengeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: any) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
