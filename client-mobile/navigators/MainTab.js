import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import MainStack from "./MainStack";
import ProfileScreen from "../screens/ProfileScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: "red", tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Dashboard"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{
                  height: 25,
                  width: 45,
                  tintColor: focused ? "red" : "grey",
                }}
                source={{
                  uri: "https://seeklogo.com/images/H/H_and_M-logo-9C22DB457C-seeklogo.com.png",
                }}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="storefront"
                color={focused ? "red" : "grey"}
                size={35}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="person-circle-outline"
                color={focused ? "red" : "grey"}
                size={35}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
