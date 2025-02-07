import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';
import { useFonts, Poppins_300Light,  Poppins_400Regular, Poppins_700Bold, Poppins_100Thin} from "@expo-google-fonts/poppins";
import HistoryCommuter from "./screens/commuter/HistoryCommuter";
import NearbyRides from './screens/commuter/NearbyRides';
import FindRide from './screens/commuter/FindRide';
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_100Thin
  });
  return( 
  <FindRide /> 
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
