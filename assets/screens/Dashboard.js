import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import {COLORS} from "../../assets/Colors";
export default function Dashboard() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="piggy-bank-outline"
            size={35}
            color={COLORS.gray}
          />
          <Text style={styles.heading}>Sunga Village Banking</Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
          }}
        >
          <MaterialIcons name="account-circle" size={30} color={COLORS.gray} />
          <Text style={{ color: COLORS.gray, fontSize: 12 }}>Account</Text>
        </TouchableOpacity>
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

      <View style={styles.baxContainer}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <Ionicons name="person" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Acount</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <FontAwesome5 name="money-bill" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Get Loan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <MaterialCommunityIcons
              name="bank-transfer-in"
              size={45}
              color={COLORS.gray}
            />
            <Text style={styles.bottomText}>Deposit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <Ionicons name="receipt" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Statement</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <FontAwesome name="group" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Groups</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <FontAwesome5 name="money-check" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>My Loan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <Entypo name="share" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <MaterialIcons name="policy" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <AntDesign name="infocirlce" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>About Us</Text>
          </TouchableOpacity>
        </View>

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
    marginTop: -10,
  },
  baxContainer: {
    width: "100%",
    height: "85%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddin: 5,
  },
  box: {
    width: "33.33%",
    height: "25%",
    padding: 5,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
  },
  bottomText: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
