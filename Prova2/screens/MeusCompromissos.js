import { View, Text, StyleSheet, FlatList } from 'react-native';

const dados = [
  { id: '1', hora: '09h30:', titulo: 'Reunião "Daily"' },
  { id: '2', hora: '14h00:', titulo: 'Reunião com cliente Carros & Carros' },
  { id: '3', hora: '16h30:', titulo: 'Prazo final Projeto X' },
];

export default function MeusCompromissos() {
  return (
    <View style={styles.container}>
  <View style={styles.header}>
    <Text style={styles.titulo}>(Eu)</Text>
    <Text style={styles.subtitulo}>
      Guilherme Santos de Andrade{"\n"}Sistemas de Informação
    </Text>
  </View>

  <FlatList
    data={dados}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text style={styles.hora}>{item.hora}</Text>
        <Text style={styles.texto}>{item.titulo}</Text>
      </View>
    )}
  />
</View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 30, fontWeight: 'bold', textAlign: 'center' },
  subtitulo: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  item: { flexDirection: 'row', marginBottom: 8 },
  hora: { width: 70, fontWeight: 'bold' },
  texto: { flex: 1 },
});
