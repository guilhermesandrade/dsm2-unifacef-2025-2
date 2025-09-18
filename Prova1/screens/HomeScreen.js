import { View, StyleSheet,Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
    <Text>Guilherme Santos de Andrade</Text>

      <Button
        title="Tela 2"
        onPress={() => navigation.navigate('Tela 2')}
      />

      <Button
        title="Tela 3"
        onPress={() => navigation.navigate('Tela 3')}
      />

      <Button
        title="Tela 4"
        onPress={() => navigation.navigate('Tela 4')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});
