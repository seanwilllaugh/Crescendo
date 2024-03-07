import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MetronomeScreen from './MetronomeScreen';
import ExerciseScreen from './ExerciseScreen';
import FlashCardScreen from './FlashCardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="MetronomeScreen" component={MetronomeScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        <Stack.Screen name="FlashCardScreen" component={FlashCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
