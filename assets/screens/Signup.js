import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { COLORS } from "../../assets/Colors";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [match, setMatch] = useState(false);
  const [placeholdercolor, setPlaceholdercolor] = useState("#ff0039");

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="piggy-bank-outline"
          size={35}
          color={COLORS.gray}
        />
        <Text style={styles.heading}>Sunga Village Banking</Text>
      </View>
      <Text style={styles.sub_heading}>Where saving is top priority</Text>
      <View
        style={{
          backgroundColor: COLORS.gray,
          width: "100%",
          height: 0.26,
          marginVertical: 20,
        }}
      ></View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: COLORS.gray,
            fontWeight: "bold",
            fontSize: 22,
            marginVertical: 20,
          }}
        >
          Sign Up Here
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            width={"100%"}
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="phone number - 09 or 07********"
            width={"100%"}
            secureTextEntry={false}
            maxLength={10}
            keyboardType="phone-pad"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            maxLength={12}
            width={"100%"}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={match ? styles.TextInput : styles.MissMatchInput}
            placeholder="Comfirm Password"
            maxLength={12}
            width={"100%"}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(cpassword) => {
              setCPassword(cpassword);
              if (password == cpassword) {
                setMatch(() => true);
              } else {
                setMatch(() => false);
              }
            }}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.gotToLogin}>Go to Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.loginText}>SIGN Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: COLORS.gray,
    fontSize: 22,
    fontWeight: "bold",
  },
  sub_heading: {
    color: "#808080",
    fontSize: 14,
    marginStart: 7,
  },
  loginText: {
    color: COLORS.background,
    fontSize: 22,
    fontWeight: "bold",
    alignContent: "center",
  },
  inputView: {
    backgroundColor: "#cae1fd",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  MissMatchInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "#ff0039",
  },
  gotToLogin: {
    height: 30,
    marginBottom: 30,
  },
  signUpBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLORS.gray,
  },
});
