import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigationComponent from "../presentation/components/BottomNavigationComponent";
import DetailPokemonPage from "../presentation/pages/DetailPokemonPage";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={BottomNavigationComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailPokemonPage"
          component={DetailPokemonPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
