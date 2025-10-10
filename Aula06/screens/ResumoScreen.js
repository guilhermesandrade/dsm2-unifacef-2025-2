import { View, Text, StyleSheet } from "react-native";

export default function ResumoScreen({ route }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados Cadastrados</Text>
      <Text>Nome: {nome}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
});
