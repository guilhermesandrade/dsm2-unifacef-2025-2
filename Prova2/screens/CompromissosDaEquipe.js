import { View, Text, StyleSheet, SectionList } from 'react-native';

const dados = [
  {
    title: '(Eu)',
    data: [
      { hora: '09h30:', titulo: 'Reunião "Daily"' },
      { hora: '14h00:', titulo: 'Reunião com cliente Carros & Carros' },
      { hora: '16h30:', titulo: 'Prazo final Projeto X' },
    ],
  },
  {
    title: 'Jurema (chefe)',
    data: [
      { hora: '09h30:', titulo: 'Reunião "Daily"' },
      { hora: '12h00:', titulo: 'Almoço com a diretoria' },
      { hora: '15h00:', titulo: 'Saída viagem' },
    ],
  },
  {
    title: 'Aderbal',
    data: [
      { hora: '09h30:', titulo: 'Reunião "Daily"' },
      { hora: '13h30:', titulo: 'Visita técnica Uni-FACEF' },
      { hora: '16h30:', titulo: 'Prazo final Projeto X' },
    ],
  },
];

export default function CompromissosDaEquipe() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>
        Guilherme Santos de Andrade{"\n"}Sistemas de Informação
      </Text>

      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item.titulo + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.hora}>{item.hora}</Text>
            <Text style={styles.texto}>{item.titulo}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  subtitulo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 6,
    textAlign: 'center',
  },
  item: { flexDirection: 'row', marginBottom: 6 },
  hora: { width: 70, fontWeight: 'bold' },
  texto: { flex: 1 },
});
