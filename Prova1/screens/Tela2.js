import { View, Button, Image } from 'react-native';

export default function Tela2({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'cyan' }}>
      <Image source={{uri:'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={{ width:200, height:200 }} />
      <Button title="Voltar para Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
}
