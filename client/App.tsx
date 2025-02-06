import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';
import HomeCommuter from './screens/commuter/HomeCommuter';
import MainNavigator from './navigation/MainNavigator';
import { useFonts, Poppins_300Light,  Poppins_400Regular, Poppins_700Bold, Poppins_100Thin} from "@expo-google-fonts/poppins";

  // <AuthNavigator />

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_100Thin
  });
  return( <AuthNavigator /> );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  // <View>
    {/* <HomeCommuter /> */}
  // </View>