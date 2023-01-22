import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import Group from "../components/Group";
import BackToHome from "./../components/BackToHome";

export default class Groups extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => alert("Back Button Clicked")}>
          <BackToHome />
        </TouchableOpacity>
        <ScrollView style={{ marginTop: 10 }}>
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
