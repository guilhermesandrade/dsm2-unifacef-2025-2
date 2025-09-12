import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Galeria() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={40} color="purple" style={styles.icone} />
      <Text style={styles.titulo}>Galeria</Text>

      <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg" }} style={styles.imagem} />
      <Image source={{ uri: "https://media.istockphoto.com/id/1425382824/pt/foto/green-turtle-at-the-water-surface.jpg?s=1024x1024&w=is&k=20&c=EsF1ErViDWAnG0_jaXxTUBJFpyds3EEfjPeXVgM_qpU=" }} style={styles.imagem} />
      <Image source={{ uri: "https://media.istockphoto.com/id/1431532355/pt/foto/green-sea-turtle-in-lagoon.jpg?s=1024x1024&w=is&k=20&c=JSd6fX9xXjPAe2o44Fhwxxkv4Dk-WX1PPgbrQQaycEg=" }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  icone: { 
    marginBottom: 10 
  },
  imagensContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  imagem: { 
    width: 100, 
    height: 100, 
    borderRadius: 10,
  }
});