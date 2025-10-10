import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [telefone, setTelefone] = useState("");

  const [erros, setErros] = useState({});

  const validar = () => {
    let temp = {};

    if (nome.trim() === "") temp.nome = "Informe o nome completo";
    if (!email.includes("@")) temp.email = "E-mail inválido";
    if (senha.length < 6) temp.senha = "Senha deve ter no mínimo 6 caracteres";
    if (confirmar !== senha) temp.confirmar = "As senhas não coincidem";
    if (!/^\d+$/.test(telefone)) temp.telefone = "Apenas números são permitidos";

    setErros(temp);

    if (Object.keys(temp).length === 0) {
      navigation.navigate("Resumo", {
        nome,
        email,
        telefone,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry value={confirmar} onChangeText={setConfirmar} />
      {erros.confirmar && <Text style={styles.erro}>{erros.confirmar}</Text>}

      <TextInput style={styles.input} placeholder="Telefone" keyboardType="numeric" value={telefone} onChangeText={setTelefone} />
      {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      <Button title="Cadastrar" onPress={validar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 10, padding: 10, borderRadius: 8 },
  erro: { color: "red", marginBottom: 10 },
});
