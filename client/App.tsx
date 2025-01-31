import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';
import HomeCommuter from './screens/commuter/HomeCommuter';
import MainNavigator from './navigation/MainNavigator';
  // <AuthNavigator />

export default function App() {
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