import { View, Text, StyleSheet } from "react-native";

export default function BoasVindasScreen({ route }) {
  const { usuario } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo(a), {usuario}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 22, fontWeight: "bold" },
});
