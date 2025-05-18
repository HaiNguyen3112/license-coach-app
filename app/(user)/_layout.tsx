import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ChallengeIcon, GiftIcon, ProfileIcon } from "@/assets/icons/icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
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
        name="giftUser"
        options={{
          title: "Gift",
          tabBarIcon: ({ color }: any) => <GiftIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="challengeUser"
        options={{
          title: "Challenge",
          tabBarIcon: ({ color }: any) => <ChallengeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profileUser"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: any) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
