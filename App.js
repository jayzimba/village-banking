import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AboutUs from "./assets/screens/AboutUs";
import Account from "./assets/screens/Account";
import Dashboard from "./assets/screens/Dashboard";
import Groups from "./assets/screens/Groups";
import Login from "./assets/screens/Login";
import PrivacyPolicy from "./assets/screens/PrivacyPolicy";
import Signup from "./assets/screens/Signup";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Dashboard />
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Account /> */}
      {/* <AboutUs /> */}
      {/* <PrivacyPolicy /> */}
      {/* <Groups /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
  },
});
