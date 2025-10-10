import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const validar = () => {
    let valido = true;

    if (!email.includes("@")) {
      setErroEmail("Digite um e-mail válido");
      valido = false;
    } else {
      setErroEmail("");
    }

    if (senha.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres");
      valido = false;
    } else {
      setErroSenha("");
    }

    if (valido) {
      navigation.navigate("BoasVindas", { usuario: email });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

      <Button title="Entrar" onPress={validar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 10, padding: 10, borderRadius: 8 },
  erro: { color: "red", marginBottom: 10 },
});
