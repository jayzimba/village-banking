import { Image, StyleSheet, Text, View } from "react-native";
import React, { Alert } from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { COLORS } from "../Colors";

export default function Group(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ marginEnd: 10 }}>
          <FontAwesome name="group" size={35} color={COLORS.gray} />
        </View>
        <View>
          <Text style={styles.name}>{"group name"}</Text>
          <Text style={{ color: "#78797a", fontSize: 12 }}>
            {"Admin contact: " + "0971141085"}
          </Text>
          <Text>Members: {0}</Text>
        </View>
      </View>

      {/* {props.vote ? (
        <View
          style={props.selected ? styles.voteNowBtnSelected : styles.voteNowBtn}
        >
          <Text style={{ color: "white" }}>Join</Text>
        </View>
      ) : null} */}

      <View style={styles.voteNowBtn}>
        <Text style={{ color: "white" }}>Join</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eded",
    marginBottom: 10,
    paddingBottom: 10,
    marginHorizontal: 10,
  },

  name: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  voteNowBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 100,
    marginVertical: 10,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
  },
  voteNowBtnSelected: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 100,
    marginVertical: 10,
    backgroundColor: "#afafaf",
    borderRadius: 10,
  },
});
