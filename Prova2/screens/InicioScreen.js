import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>
      <Text style={styles.subtitulo}>Guilherme Santos de Andrade{"\n"}Sistemas de Informação</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Meus compromissos')}
      >
        <Text style={styles.textoBotao}>Meus compromissos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Compromissos da equipe')}
      >
        <Text style={styles.textoBotao}>Compromissos da equipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitulo: { fontSize: 14, color: '#555', marginBottom: 20, textAlign: 'center' },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
