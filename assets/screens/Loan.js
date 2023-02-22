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
export default function Loan({navigation}) {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [Disabled, setDisabled] = React.useState(true);

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Text>
          You are ligible to get a loan from your group upto x3 your total
          deposits. Note your Lona will be processed and approval will be made
          by your group admin
        </Text>

        <TextInput
          variant="standard"
          //   label="Amount"
          placeholder="Amount"
          style={{ margin: 16 }}
          color={COLORS.gray}
          keyboardType="numeric"
          onChangeText={(amount) => {setAmount(amount); setDisabled(false);}}
        />

        <TouchableOpacity
          style={styles.payButtton}
          onPress={() => {Disabled == false? alert("Admin will comfirm your loan", navigation.navigate("Dashboard")): null}}
          disabled={Disabled}
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
            Apply for loan
          </Text>
        </TouchableOpacity>
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
