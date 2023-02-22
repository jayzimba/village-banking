import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  LogDataInDB = () => {
    var email = this.state.email;
    var password = this.state.password;

    if (email.length == 0 || password.length == 0) {
      alert("Required Field Is Missing!");
    } else {
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://172.20.10.4/vb/signIn.php", requestOptions)
        .then((Response) => Response.json())
        .then((Response) => {
          if (Response.Message == "log in Failed!") {
            alert(
              "Login Failed - Try Again",
              this.setState({
                email: "",
                password: "",
              })
            );
          } else {
            this.props.navigation.navigate("Dashboard", { Response });
          }
        })
        .catch((error) => {
          console.error("ERROR:" + error);
        })
        .finally(() =>
          this.setState({
            email: "",
            password: "",
          })
        );
    }
  };
  render() {
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
            Login
          </Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              width={"100%"}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => this.setState({ email })}
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
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.signupBtn}>you dont have an account?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={this.LogDataInDB}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  signupBtn: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLORS.gray,
  },
});
