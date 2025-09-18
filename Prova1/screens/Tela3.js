import { View, Image } from 'react-native';

export default function Tela3() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Image source={require('../assets/logo.png')} style={{ width:200, height:200 }} />
    </View>
  );
}
