import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import BackToHome from "./../components/BackToHome";
import { Stack, TextInput, IconButton, Button } from "@react-native-material/core";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../assets/Colors";
import {
    MaterialCommunityIcons,
    Ionicons,
    FontAwesome5,
    FontAwesome,
    AntDesign,
    MaterialIcons,
    Entypo,
  } from "@expo/vector-icons";
export default function Deposit() {
  return (
    <View>
      <TouchableOpacity onPress={() => Alert("Back Button Clicked")}>
        <BackToHome />
      </TouchableOpacity>

      <ScrollView style={{ marginHorizontal: 20 }}>
        <Text>
          You are About to initiate your deposit to you group village banking
          account. please ensure to use a registered mobile money number to
          proceed with the following transation
        </Text>

        <TextInput
          variant="standard"
          label="Name"
          style={{ margin: 16 }}
          color={COLORS.gray}
        />
        <TextInput
          variant="standard"
          label="Amount"
          style={{ margin: 16 }}
          color={COLORS.gray}
          keyboardType="numeric"
        />

        {/* <IconButton
          icon={(props) => (
            <MaterialCommunityIcons
              name="bank-transfer-in"
              size={45}
              color={COLORS.gray}
            />
          )}
        /> */}
         <Button variant="Contained" title="Deposit" color={COLORS.accent} style={{marginTop:30}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
