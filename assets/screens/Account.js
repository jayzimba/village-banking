import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
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
  EvilIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../assets/Colors";
import Heading from "../components/Heading";
import BackToHome from "../components/BackToHome";

export default function Account() {
  return (
    <View>
      {/* <Heading /> */}
      <TouchableOpacity onPress={() => Alert.alert("Back Button Clicked")}>
        <BackToHome />
      </TouchableOpacity>

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <EvilIcons name="user" size={100} color={COLORS.gray} />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: COLORS.gray, marginBottom: 3 }}>
            {"@patrick123"}
          </Text>
          <Text style={{ color: COLORS.gray }}>+260 {"777603060"}</Text>
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
        <Text style={{ color: COLORS.gray }}> {"Pamozi"}</Text>
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
        <Text style={{ color: COLORS.gray }}> +260 {"7776030"}</Text>
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
          Address:
        </Text>
        <Text style={{ color: COLORS.gray }}> {"Chifubu 234"}</Text>
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
        <Text style={{ color: COLORS.gray }}> K {3456}</Text>
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
        <Text style={{ color: COLORS.gray }}> K {3456 * 2}</Text>
      </View>
    </View>
  );
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
