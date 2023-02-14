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
import Deposit from "./assets/screens/Deposit";
import Loan from "./assets/screens/Loan";
import MyLoan from "./assets/screens/MyLoan";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Groups" component={Groups} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="Deposit" component={Deposit} />
          <Stack.Screen name="Loan" component={Loan} />
          <Stack.Screen name="MyLoan" component={MyLoan} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />

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
