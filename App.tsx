// Importa o componente status bar
import { StatusBar } from "expo-status-bar";
//Importa os modelos necessários para navegação no aplicativo.
import { StyleSheet, Text, View } from "react-native";

// Importa os modelos necessários para navegação no aplicativo
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomePage" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "DetailsPage" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
