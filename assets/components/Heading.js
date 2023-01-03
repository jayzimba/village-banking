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

export default function Heading() {
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
    </View>
  )
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
})