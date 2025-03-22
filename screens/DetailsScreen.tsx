// Importa componentes básicos de estilo e estrutura do React Native.
import { StyleSheet, Text, View } from "react-native";

// Define a função que representa a tela "Details".
export default function DetailsScreen() {
  return (
    // A tela Details usa uma view com estilo centralizado.
    <View style={styles.container}>
      {/* Texto que aparece na tela */}
      <Text>Bem Vindo a Details Screen</Text>
    </View>
  );
}

// Estilos para a tela, utilizando StyleSheet do React Native.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a View ocupar todo o espaço disponível na tela.
    justifyContent: "center", // Centraliza o conteúdo verticalmente.
    alignItems: "center", // Centraliza o conteúdo horizontalmente.
  },
});
