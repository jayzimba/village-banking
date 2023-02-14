import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import BackToHome from "./../components/BackToHome";
import {
  Stack,
  TextInput,
  IconButton,
  Button,
} from "@react-native-material/core";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../assets/Colors";
import { PayWithFlutterwave, close } from "flutterwave-react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
export default function Deposit() {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [contact, setContact] = React.useState("");

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Text>
          You are About to initiate your deposit to you group village banking
          account. please ensure to use a registered mobile money number to
          proceed with the following transation
        </Text>

        <TextInput
          variant="standard"
          //   label="Name"
          placeholder="Name"
          style={{ margin: 16 }}
          color={COLORS.gray}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          variant="standard"
          //   label="Contact"
          placeholder="Contact"
          style={{ margin: 16 }}
          color={COLORS.gray}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(contact) => setContact(contact)}
        />
        <TextInput
          variant="standard"
          //   label="Amount"
          placeholder="Amount"
          style={{ margin: 16 }}
          color={COLORS.gray}
          keyboardType="numeric"
          onChangeText={(amount) => setAmount(amount)}
        />

        <View style={{ flexDirection: "row", alignItems: "center",marginStart: 16}}>
      
          <Text style={{ color: COLORS.gray}}>
            Click to Verify Details
          </Text>
        </View>

        <PayWithFlutterwave
          onRedirect={() => Alert.alert("Deposit Model Closed")}
          options={{
            tx_ref: Date.now().toString(),
            authorization: "FLWPUBK-aa9cc71e514393d4bfc408610089dcf2-X",
            customer: {
              email: "customer@villagebankinigapp.com",
              phone_number: contact.toString(),
              name: name.toString(),
            },
            amount: amount.toString(),
            currency: "ZMW",
            payment_options: "ussd",
          }}
          customButton={(props) => (
            <TouchableOpacity
              style={styles.payButtton}
              onPress={props.onPress}
              isBusy={props.isInitializing}
              disabled={false}
            >
              <Ionicons name="cash" size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "500",
                  marginLeft: 10,
                }}
              >
                Deposit Now
              </Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  payButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 35,
    marginVertical: 15,
    backgroundColor: COLORS.accent,
    borderRadius: 5,
  },
});
