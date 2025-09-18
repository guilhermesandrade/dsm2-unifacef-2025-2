import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tela4() {
  return (
    <View style={{ flexDirection:'row', justifyContent:'space-around', alignItems:'center', flex:1 }}>
      <Ionicons name="home" size={50} color="green" />
      <Ionicons name="person" size={50} color="blue" />
      <Ionicons name="settings" size={50} color="red" />
    </View>
  );
}
