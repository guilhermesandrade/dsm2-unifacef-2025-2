import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Galeria() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={40} color="purple" style={styles.icone} />
      <Text style={styles.titulo}>Galeria</Text>

      <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.imagem} />
      <Image source={{ uri: "https://placekitten.com/300/300" }} style={styles.imagem} />
      <Image source={{ uri: "https://source.unsplash.com/random/200x200" }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  imagem: { width: 200, height: 200, marginVertical: 10, borderRadius: 15 },
  icone: { marginBottom: 10 }
});
