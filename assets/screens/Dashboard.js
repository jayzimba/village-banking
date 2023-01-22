import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Share,
  Modal,
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
import Account from "./Account";
import AboutUs from "./AboutUs";
import PrivacyPolicy from "./PrivacyPolicy";
import Groups from "./Groups";
import Deposit from "./Deposit";

export default function Dashboard() {
  const [showAccount, setShowAccount] = React.useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);
  const [showAboutUs, setShowAboutUs] = React.useState(false);
  const [showGroups, setShowGroups] = React.useState(false);
  const [showDeposit, setShowDeposit] = React.useState(false);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Download the Sunga Village App on the Play Store or Apple Store by searching 'Sunga Village Banking'",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
          onPress={() => setShowAccount(true)}
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
          <TouchableOpacity
            style={styles.inner}
            onPress={() => setShowAccount(true)}
          >
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
          <TouchableOpacity
            style={styles.inner}
            onPress={() => setShowDeposit(true)}
          >
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
          <TouchableOpacity
            style={styles.inner}
            onPress={() => setShowGroups(true)}
          >
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
          <TouchableOpacity style={styles.inner} onPress={onShare}>
            <Entypo name="share" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}
            onPress={() => setShowPrivacyPolicy(true)}
          >
            <MaterialIcons name="policy" size={35} color={COLORS.gray} />
            <Text style={styles.bottomText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}
            onPress={() => setShowAboutUs(true)}
          >
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
        <Modal visible={showAccount} animationType="slide">
          <SafeAreaView>
            <Account />
          </SafeAreaView>
        </Modal>
        <Modal visible={showPrivacyPolicy} animationType="slide">
          <SafeAreaView>
            <PrivacyPolicy />
          </SafeAreaView>
        </Modal>
        <Modal visible={showAboutUs} animationType="slide">
          <SafeAreaView>
            <AboutUs />
          </SafeAreaView>
        </Modal>
        <Modal visible={showGroups} animationType="slide">
          <SafeAreaView>
            <Groups />
          </SafeAreaView>
        </Modal>
        <Modal visible={showDeposit} animationType="slide">
          <SafeAreaView>
            <Deposit />
          </SafeAreaView>
        </Modal>
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
