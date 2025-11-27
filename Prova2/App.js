import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioScreen from './screens/InicioScreen';
import MeusCompromissos from './screens/MeusCompromissos';
import CompromissosDaEquipe from './screens/CompromissosDaEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={InicioScreen} />
        <Stack.Screen name="Meus compromissos" component={MeusCompromissos} />
        <Stack.Screen name="Compromissos da equipe" component={CompromissosDaEquipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
