import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Dashboard from "./assets/screens/Dashboard";
import Login from './assets/screens/Login';
import Signup from "./assets/screens/Signup";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Dashboard/>  */}
      <Login/>
      {/* <Signup/> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  
});
