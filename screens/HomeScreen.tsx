// Importa bibliotecas essenciais, incluindo os componentes e o tipo de navegação.
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

// Define os parâmetros de navegação para a tela "Home".
type RootStackParamList = {
  Home: undefined; // A tela "Home" não espera parâmetros.
  Details: undefined; // A tela "Details" não espera parâmetros.
};

// Define o tipo de props para a tela "Home", utilizando a navegação do stack.
type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

// Função para renderizar a tela "Home".
export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    // A tela Home possui uma view centralizada com um botão.
    <View style={styles.container}>
      {/* Texto que aparece na tela */}
      <Text>Bem Vindo a Home Screen</Text>

      {/* Botão que, ao ser pressionado, navega para a tela "Details". */}
      <Button
        title="ir para a tela detalhes"
        onPress={() => navigation.navigate("Details")} // Navegação para a tela Details.
      />
    </View>
  );
}

// Estilos para a tela Home, similar ao que foi feito na tela Details.
const styles = StyleSheet.create({
  container: {
    flex: 1, // A View ocupa todo o espaço disponível na tela.
    justifyContent: "center", // Centraliza o conteúdo verticalmente.
    alignItems: "center", // Centraliza o conteúdo horizontalmente.
  },
});
