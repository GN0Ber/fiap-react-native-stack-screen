// Importa o componente status bar, utilizado para manipulação da barra de status.
import { StatusBar } from "expo-status-bar";
// Importa componentes básicos de estilo e estrutura de layout do React Native.
import { StyleSheet, Text, View } from "react-native";

// Importa os módulos necessários para a navegação do aplicativo.
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importa as telas que serão utilizadas no aplicativo.
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

// Define os parâmetros de navegação para o tipo de dados que serão passados nas telas.
type RootStackParamList = {
  Home: undefined; // A tela "Home" não espera parâmetros.
  Details: undefined; // A tela "Details" também não espera parâmetros.
};

// Cria um stack navigator, que gerencia a navegação entre telas empilhadas.
const Stack = createStackNavigator<RootStackParamList>();

// Função principal que renderiza a navegação do aplicativo.
export default function App() {
  return (
    // NavigationContainer é necessário para gerenciar a navegação.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Definindo a tela inicial do aplicativo como "Home". */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomePage" }} // Define o título da tela "Home".
        />
        {/* Definindo outra tela no stack, "Details", que será acessada a partir da tela Home. */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "DetailsPage" }} // Título para a tela "Details".
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
