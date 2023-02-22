import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
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
  EvilIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../assets/Colors";
import Heading from "../components/Heading";
import BackToHome from "../components/BackToHome";
import React, { Component } from "react";
import { useRoute } from "@react-navigation/native";

const DataScreen = () => {
  const route = useRoute();
  return (
    <View style={{marginTop:20}}>
      {/* <Heading /> */}

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <EvilIcons name="user" size={100} color={COLORS.gray} />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: COLORS.gray, marginBottom: 3 }}>
            {route.params.Data.email}
          </Text>
          <Text style={{ color: COLORS.gray }}>{route.params.Data.name}</Text>
        </View>
      </View>

      <View style={styles.inputView}>
        <Text
          style={{
            color: COLORS.gray,
            marginBottom: 3,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Group:
        </Text>
        <Text style={{ color: COLORS.gray }}> {route.params.Data.gname}</Text>
      </View>
      <View style={styles.inputView}>
        <Text
          style={{
            color: COLORS.gray,
            marginBottom: 3,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Contact:
        </Text>
        <Text style={{ color: COLORS.gray }}> +26{route.params.Data.contact}</Text>
      </View>

      <View style={styles.inputView}>
        <Text
          style={{
            color: COLORS.gray,
            marginBottom: 3,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Total Deposits:
        </Text>
        <Text style={{ color: COLORS.gray }}> K {route.params.Data.savings}</Text>
      </View>
      <View style={styles.inputView}>
        <Text
          style={{
            color: COLORS.gray,
            marginBottom: 3,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Loan Legible Amount:
        </Text>
        <Text style={{ color: COLORS.gray }}> K {route.params.Data.savings * 3}</Text>
      </View>
    </View>
  );
};
export default class Account extends Component {
  state = {
    memberData: [],
    loanLegibleAmount: 0,
  };

  fetchMemberData = async () => {
    fetch("http://172.20.10.4/vb/fetchMemberData.php")
      .then((response) => response.json())
      .then((result) => {
        if (result == "no member found") {
          this.setState({ memberData: [] });
        } else {
          this.setState({ memberData: result });
        }
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.fetchMemberData();
  }

  render() {
    return (
      <View>
        <DataScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    paddingStart: 10,
    backgroundColor: "#cae1fd",
    borderRadius: 30,
    marginHorizontal: 30,
    height: 45,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
