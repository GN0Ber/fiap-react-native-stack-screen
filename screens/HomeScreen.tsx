import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

import { StackScreenProps } from "@react-navigation/stack"

type RootStackParamList = {
  Home: undefined
  Details: undefined
}

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Bem Vindo a Home Screen</Text>

      <Button
        title="ir para a tela detalhes"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
