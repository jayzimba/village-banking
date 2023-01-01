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
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Text style={{color:COLORS.gray, fontWeight:"bold", fontSize:22, marginVertical: 20}}>Login</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            width={"100%"}
            textContentType="emailAddress"
            keyboardType='email-address'
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

        <TouchableOpacity>
          <Text style={styles.signupBtn}>you dont have an account?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
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
    backgroundColor:'#cae1fd',
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
  signupBtn: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:COLORS.gray,
  }
});
