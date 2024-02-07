import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import HomePage from "../pages/HomePage";
import ComparePage from "../pages/ComparePage";

const Tab = createBottomTabNavigator();

const BottomNavigationComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#DC0A2D",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" size={24} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Compare"
        component={ComparePage}
        options={{
          tabBarLabel: "Compare",
          tabBarIcon: () => <Icon name="gamepad" size={24} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationComponent;
