import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import BoasVindasScreen from "./src/screens/BoasVindasScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import ResumoScreen from "./src/screens/ResumoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BoasVindas" component={BoasVindasScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Resumo" component={ResumoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
