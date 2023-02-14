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
} from "@expo/vector-icons";
import { COLORS } from "../../assets/Colors";
import BackToHome from "../components/BackToHome";

export default function AboutUs() {

  return (
    <View>
      

      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <AntDesign name="infocirlce" size={50} color={COLORS.gray} />

        <Text
          style={{
            marginHorizontal: 20,
            lineHeight: 20,
            letterSpacing: 0.5,
            marginTop: 20,
            fontSize: 16,
          }}
        >
          Village Bank is a community bank offering deposit and loan services to
          individuals and businesses. We have nine retail branch locations and
          provide commercial and consumer banking services in the Chesterfield,
          Hanover, Henrico and Powhatan Counties, the City of Richmond, and the
          City of Williamsburg. Village Bank strongly believes in our employees,
          our community, and our customers. As a true community institution, we
          want to be the bank of choice and the employer of choice.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "100%",
            backgroundColor: "#ededed",
            paddingHorizontal: 7,
            paddingVertical: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
            }}
          >
            {"©Copy2023"}
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Version {"1.0"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
