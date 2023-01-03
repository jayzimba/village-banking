import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function BackToHome() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
