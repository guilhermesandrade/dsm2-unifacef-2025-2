import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Perfil from './screens/ProfileScreen';
import Galeria from './screens/Galeria';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Galeria" component={Galeria}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
