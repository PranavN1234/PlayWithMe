import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import OpeningScreen from "./screens/OpeningScreen";
export type RootStackParamList= {
    Home: undefined;
    Paywall: undefined;
    Demo: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {



  return (

      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  options={
                  {
                      headerShown: false,
                  }
                  }
                  name="Home" component={HomeScreen} />
              <Stack.Screen
                  name="Demo" component={OpeningScreen} />


          </Stack.Navigator>
      </NavigationContainer>

  );
}


